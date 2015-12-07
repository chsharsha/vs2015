using InformationSecurityScorecard.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using InformationSecurityScorecard.DataAccess;
using OrgEnt = InformationSecurityScorecard.Entities.Organization;
using System.Reflection;
using InformationSecurityScorecard.Logging;

namespace InformationSecurityScorecard.Implementations
{
    public class Implementations
    {

        public OrgEnt GetDetails()
        {
            OrgEnt org = new OrgEnt();
            org.qs = new List<QuestionSection>();

            using (var db = new InfoSecSurveyEntities())
            {
                var orgDetails = db.Organizations.Where(x => x.OrganizationId == 3).FirstOrDefault();
                org.OrganizationID = orgDetails.OrganizationId;
                org.City = orgDetails.City;
                org.Country = orgDetails.Country;
                org.State = orgDetails.State;
                org.OrganizationName = orgDetails.Organization_Name;
                org.TotalResponseCount = db.Surveys.Count();
                org.AuditingOrg = db.Organizations.Where(x => x.Survey_OrganizationId == orgDetails.Survey_OrganizationId).FirstOrDefault().Organization_Name;
                QuestionSection qs;
                Question q;
                var dbQsnSecList = db.Questionnaire_Section.ToList();

                foreach (var i in dbQsnSecList)
                {
                    qs = new QuestionSection();
                    qs.QuestionSectionID = i.SectionId;
                    qs.QuestionSecDescription = i.Section_Description;
                    qs.QsnList = new List<Question>();
                    var associatedQsnrs = db.Questionnaires.Where(x => x.SectionId == i.SectionId).ToList();
                    foreach (var assocQsnr in associatedQsnrs)
                    {
                        int yesCount = 0;
                        int noCount = 0;
                        q = new Question();
                        q.QuestionID = assocQsnr.QuestionId;
                        q.QuestionDescription = assocQsnr.Description;
                        var qsnInstns = db.Questionnaire_Instance.Where(x => x.QuestionId == assocQsnr.QuestionId).Select(x => x.Questionnaire_InstanceId);
                        foreach (var item in qsnInstns)
                        {
                            var ans = db.AnswerInstances.First(x => x.Questionnaire_InstanceId == item).AnswerId;
                            if (ans.Equals(1))
                            {
                                yesCount++;
                            }
                            else
                            {
                                noCount++;
                            }
                        }
                        q.YesCount = yesCount;
                        q.NoCount = noCount;
                        q.TotalResponses = yesCount + noCount;
                        q.YesPercentage = (float)q.YesCount * 100 / (float)q.TotalResponses;
                        q.NoPercentage = (float)q.NoCount * 100 / (float)q.TotalResponses;
                        qs.QsnList.Add(q);
                    }
                    FillSectionwisePercentages(qs);
                    org.qs.Add(qs);
                }

            }
            FillOrgwisePercentages(org);
            return org;
        }

        public void SendEmail(List<string> SenderList, string fileName)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                CommunicationModule.CommunicationManager cm = new CommunicationModule.CommunicationManager();

                var fromAddress = "dbms.ubmis2015@gmail.com";
                var Subject = "Assessment Report for questionnaire";
                var cmType = db.Communication_Type.First();
                cm.SendEmail(SenderList, fileName, cmType.Decsription,fromAddress,Subject);
                Communication_Log cmLog;
                Attachment am;
                foreach (var sender in SenderList)
                {
                    cmLog = new Communication_Log();
                    cmLog.Communication_TypeId = cmType.Communication_TypeId;
                    cmLog.Date_Log = DateTime.Now;
                    cmLog.FromAddress = fromAddress;
                    cmLog.ToAddress = sender;
                    cmLog.MailSubject = Subject;
                    db.Communication_Log.Add(cmLog);
                    db.SaveChanges();
                    var logID = cmLog.LogId;
                    am = new Attachment();
                    am.LogId = logID;
                    am.FileName = fileName;
                    db.Attachments.Add(am);
                    db.SaveChanges();
                }



            }
        }

        public OrgEnt GetDetails(int minExp, int maxExp)
        {
            OrgEnt org = new OrgEnt();
            org.qs = new List<QuestionSection>();

            using (var db = new InfoSecSurveyEntities())
            {
                var orgDetails = db.Organizations.Where(x => x.OrganizationId == 3).FirstOrDefault();
                org.OrganizationID = orgDetails.OrganizationId;
                org.City = orgDetails.City;
                org.Country = orgDetails.Country;
                org.State = orgDetails.State;
                org.OrganizationName = orgDetails.Organization_Name;
                var usersList = db.Users.Where(x => x.Months_of_Experience >= minExp && x.Months_of_Experience <= maxExp).Select(x => x.UserId).ToList();
                var surveyList = db.Surveys.Where(x => usersList.Contains(x.UserId));
                org.TotalResponseCount = surveyList.Count();
                var surveyIDList = surveyList.Select(x => x.SurveyId);
                org.AuditingOrg = db.Organizations.Where(x => x.Survey_OrganizationId == orgDetails.Survey_OrganizationId).FirstOrDefault().Organization_Name;
                QuestionSection qs;
                Question q;
                var dbQsnSecList = db.Questionnaire_Section.ToList();

                foreach (var i in dbQsnSecList)
                {
                    qs = new QuestionSection();
                    qs.QuestionSectionID = i.SectionId;
                    qs.QuestionSecDescription = i.Section_Description;
                    qs.QsnList = new List<Question>();
                    var associatedQsnrs = db.Questionnaires.Where(x => x.SectionId == i.SectionId).ToList();
                    foreach (var assocQsnr in associatedQsnrs)
                    {
                        int yesCount = 0;
                        int noCount = 0;
                        q = new Question();
                        q.QuestionID = assocQsnr.QuestionId;
                        q.QuestionDescription = assocQsnr.Description;
                        var qsnInstns = db.Questionnaire_Instance.Where(x => x.QuestionId == assocQsnr.QuestionId).Where(m => surveyIDList.Contains(m.SurveyId)).Select(x => x.Questionnaire_InstanceId);
                        foreach (var item in qsnInstns)
                        {
                            var ans = db.AnswerInstances.First(x => x.Questionnaire_InstanceId == item).AnswerId;
                            if (ans.Equals(1))
                            {
                                yesCount++;
                            }
                            else
                            {
                                noCount++;
                            }
                        }
                        q.YesCount = yesCount;
                        q.NoCount = noCount;
                        q.TotalResponses = yesCount + noCount;
                        q.YesPercentage = (float)q.YesCount * 100 / (float)q.TotalResponses;
                        q.NoPercentage = (float)q.NoCount * 100 / (float)q.TotalResponses;
                        qs.QsnList.Add(q);
                    }
                    FillSectionwisePercentages(qs);
                    org.qs.Add(qs);
                }

            }
            FillOrgwisePercentages(org);
            return org;
        }

        public List<DepartmentList> GetDepartments()
        {
            List<DepartmentList> lstDep = new List<DepartmentList>();
            using (var db = new InfoSecSurveyEntities())
            {
                db.Department_of_Work.ToList().ForEach(x => lstDep.Add(new DepartmentList() { ID = x.DepartmentId, Value = x.Description }));
                return lstDep;
            }
        }
        public OrgEnt GetDetails(int deptNo)
        {
            OrgEnt org = new OrgEnt();
            org.qs = new List<QuestionSection>();

            using (var db = new InfoSecSurveyEntities())
            {
                var orgDetails = db.Organizations.Where(x => x.OrganizationId == 3).FirstOrDefault();
                org.OrganizationID = orgDetails.OrganizationId;
                org.City = orgDetails.City;
                org.Country = orgDetails.Country;
                org.State = orgDetails.State;
                org.OrganizationName = orgDetails.Organization_Name;
                var usersList = db.Users.Where(x => x.DepartmentID == deptNo).Select(x => x.UserId).ToList();
                var surveyList = db.Surveys.Where(x => usersList.Contains(x.UserId));
                org.TotalResponseCount = surveyList.Count();
                var surveyIDList = surveyList.Select(x => x.SurveyId);
                org.AuditingOrg = db.Organizations.Where(x => x.Survey_OrganizationId == orgDetails.Survey_OrganizationId).FirstOrDefault().Organization_Name;
                QuestionSection qs;
                Question q;
                var dbQsnSecList = db.Questionnaire_Section.ToList();

                foreach (var i in dbQsnSecList)
                {
                    qs = new QuestionSection();
                    qs.QuestionSectionID = i.SectionId;
                    qs.QuestionSecDescription = i.Section_Description;
                    qs.QsnList = new List<Question>();
                    var associatedQsnrs = db.Questionnaires.Where(x => x.SectionId == i.SectionId).ToList();
                    foreach (var assocQsnr in associatedQsnrs)
                    {
                        int yesCount = 0;
                        int noCount = 0;
                        q = new Question();
                        q.QuestionID = assocQsnr.QuestionId;
                        q.QuestionDescription = assocQsnr.Description;
                        var qsnInstns = db.Questionnaire_Instance.Where(x => x.QuestionId == assocQsnr.QuestionId).Where(m => surveyIDList.Contains(m.SurveyId)).Select(x => x.Questionnaire_InstanceId);
                        foreach (var item in qsnInstns)
                        {
                            var ans = db.AnswerInstances.First(x => x.Questionnaire_InstanceId == item).AnswerId;
                            if (ans.Equals(1))
                            {
                                yesCount++;
                            }
                            else
                            {
                                noCount++;
                            }
                        }
                        q.YesCount = yesCount;
                        q.NoCount = noCount;
                        q.TotalResponses = yesCount + noCount;
                        q.YesPercentage = (float)q.YesCount * 100 / (float)q.TotalResponses;
                        q.NoPercentage = (float)q.NoCount * 100 / (float)q.TotalResponses;
                        qs.QsnList.Add(q);
                    }
                    FillSectionwisePercentages(qs);
                    org.qs.Add(qs);
                }

            }
            FillOrgwisePercentages(org);
            return org;
        }


        public OrgEnt GetDetails(int minExp, int maxExp, int deptNo)
        {
            OrgEnt org = new OrgEnt();
            org.qs = new List<QuestionSection>();

            using (var db = new InfoSecSurveyEntities())
            {
                var orgDetails = db.Organizations.Where(x => x.OrganizationId == 3).FirstOrDefault();
                org.OrganizationID = orgDetails.OrganizationId;
                org.City = orgDetails.City;
                org.Country = orgDetails.Country;
                org.State = orgDetails.State;
                org.OrganizationName = orgDetails.Organization_Name;
                var usersList = db.Users.Where(x => x.Months_of_Experience >= minExp && x.Months_of_Experience <= maxExp).Where(m => m.DepartmentID == deptNo).Select(x => x.UserId).ToList();
                var surveyList = db.Surveys.Where(x => usersList.Contains(x.UserId));
                org.TotalResponseCount = surveyList.Count();
                var surveyIDList = surveyList.Select(x => x.SurveyId);
                org.AuditingOrg = db.Organizations.Where(x => x.Survey_OrganizationId == orgDetails.Survey_OrganizationId).FirstOrDefault().Organization_Name;
                QuestionSection qs;
                Question q;
                var dbQsnSecList = db.Questionnaire_Section.ToList();

                foreach (var i in dbQsnSecList)
                {
                    qs = new QuestionSection();
                    qs.QuestionSectionID = i.SectionId;
                    qs.QuestionSecDescription = i.Section_Description;
                    qs.QsnList = new List<Question>();
                    var associatedQsnrs = db.Questionnaires.Where(x => x.SectionId == i.SectionId).ToList();
                    foreach (var assocQsnr in associatedQsnrs)
                    {
                        int yesCount = 0;
                        int noCount = 0;
                        q = new Question();
                        q.QuestionID = assocQsnr.QuestionId;
                        q.QuestionDescription = assocQsnr.Description;
                        var qsnInstns = db.Questionnaire_Instance.Where(x => x.QuestionId == assocQsnr.QuestionId).Where(m => surveyIDList.Contains(m.SurveyId)).Select(x => x.Questionnaire_InstanceId);
                        foreach (var item in qsnInstns)
                        {
                            var ans = db.AnswerInstances.First(x => x.Questionnaire_InstanceId == item).AnswerId;
                            if (ans.Equals(1))
                            {
                                yesCount++;
                            }
                            else
                            {
                                noCount++;
                            }
                        }
                        q.YesCount = yesCount;
                        q.NoCount = noCount;
                        q.TotalResponses = yesCount + noCount;
                        q.YesPercentage = (float)q.YesCount * 100 / (float)q.TotalResponses;
                        q.NoPercentage = (float)q.NoCount * 100 / (float)q.TotalResponses;
                        qs.QsnList.Add(q);
                    }
                    FillSectionwisePercentages(qs);
                    org.qs.Add(qs);
                }

            }
            FillOrgwisePercentages(org);
            return org;
        }

        internal void FillSectionwisePercentages(QuestionSection lsQ)
        {
            var yesCount = lsQ.QsnList.Select(x => x.YesCount).ToArray();
            var sumYes = yesCount.Sum();

            var noCount = lsQ.QsnList.Select(x => x.NoCount).ToArray();
            var sumNo = noCount.Sum();

            var totCount = lsQ.QsnList.Select(x => x.TotalResponses).ToArray();
            var sumTot = totCount.Sum();

            lsQ.sectionLevelYes = (float)sumYes * 100 / (float)sumTot;
            lsQ.sectionLevelNo = (float)sumNo * 100 / (float)sumTot;
        }



        internal void FillOrgwisePercentages(OrgEnt OEnt)
        {
            var yesCount = OEnt.qs.Select(x => x.sectionLevelYes).ToArray().Average();
            OEnt.OrgLevelYesScore = yesCount;
            var noCount = OEnt.qs.Select(x => x.sectionLevelNo).ToArray().Average();
            OEnt.OrgLevelNoScore = noCount;
        }

        public List<OrgEnt> GetParticipatingOrganizations()
        {
            using (var db = new InfoSecSurveyEntities())
            {
                var orgs = db.Organizations.Where(x => x.OrganizationId != -1).ToList();
                List<OrgEnt> lstOrgEnt = new List<OrgEnt>();
                foreach (var i in orgs)
                {
                    lstOrgEnt.Add(new OrgEnt() { OrganizationID = i.OrganizationId, OrganizationName = i.Organization_Name, City = i.City, State = i.State, Country = i.Country });
                }
                return lstOrgEnt;
            }
        }
        public int CreateOrganization(DataAccess.Organization org)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                SetCommonProperties<DataAccess.Organization>(org);
                db.Organizations.Add(org);
                db.SaveChangesAsync().Wait();
                return org.OrganizationId;
            }

        }

        public void GetNewImports(string[] allResponses)
        {

            var userEmail = allResponses[57];
            if (!IsEmailExisting(userEmail))
            {
                Logger.InfoFormat("Importing data of the id {0} ...", userEmail);
                var firstName = allResponses[53];
                var lastName = allResponses[54];
                User u = new User();
                u.UserName = firstName + " " + lastName;
                u.User_EmailId = userEmail;
                var yearsOfExp = allResponses[55];
                if (yearsOfExp.Contains('.'))
                {
                    var m = yearsOfExp.Split('.');
                    u.Months_of_Experience = Int32.Parse(m[0]) * 12 + Int32.Parse(m[1]);
                }
                else
                {
                    u.Months_of_Experience = Int32.Parse(yearsOfExp) * 12;
                }
                var deptResp = allResponses[56];

                using (var db = new InfoSecSurveyEntities())
                {
                    u.DepartmentID = db.Department_of_Work.FirstOrDefault(x => x.Description.Equals(deptResp)).DepartmentId;
                }
                var userId = CreateUser(u);

                Survey s = new Survey();
                s.UserId = userId;
                var surveyId = CreateSurvey(s);
                Questionnaire_Instance qi;
                AnswerInstance ai;
                for (int i = 2; i <= 52; i++)
                {
                    qi = new Questionnaire_Instance();
                    qi.SurveyId = surveyId;
                    qi.QuestionId = i - 1;
                    var questInstanceId = CreateQuestionnairInstance(qi);
                    ai = new AnswerInstance();
                    ai.Questionnaire_InstanceId = questInstanceId;
                    ai.AnswerId = allResponses[i].Equals("Yes") ? (int)AnswerOptions.Yes : (int)AnswerOptions.No;
                    var answerInstanceId = CreateAnswerInstance(ai);
                }
            }
            else
            {
                Logger.InfoFormat("{0} email id already found in the system. Skipping..", userEmail);
            }

        }

        public bool IsEmailExisting(string emailId)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                return db.Users.Any(x => x.User_EmailId.Equals(emailId));
            }
        }

        public int CreateQuestionnairInstance(Questionnaire_Instance qi)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                db.Questionnaire_Instance.Add(qi);
                db.SaveChangesAsync().Wait();
                return qi.Questionnaire_InstanceId;
            }
        }

        public int CreateAnswerInstance(AnswerInstance ai)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                db.AnswerInstances.Add(ai);
                db.SaveChangesAsync().Wait();
                return ai.Answer_InstanceId;
            }
        }
        public int CreateSurvey(Survey s)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                s.Survey_StartDate = DateTime.Now.AddDays(-150);
                s.Survey_EndDate = DateTime.Now.AddDays(150);
                SetCommonProperties<Survey>(s);
                db.Surveys.Add(s);
                db.SaveChangesAsync().Wait();
                return s.SurveyId;

            }
        }


        enum AnswerOptions : Int32
        {
            Yes = 1,
            No = 2
        };




        internal void SetCommonProperties<T>(T currentObj)
        {
            PropertyInfo propertyInfoDateCreat = currentObj.GetType().GetProperty("Date_Created");

            propertyInfoDateCreat.SetValue(currentObj, DateTime.Now);

            PropertyInfo propertyInfoDateModi = currentObj.GetType().GetProperty("Date_Modified");
            propertyInfoDateModi.SetValue(currentObj, DateTime.Now);

            PropertyInfo propertyInfoDatecreatBy = currentObj.GetType().GetProperty("Date_Created_By");
            propertyInfoDatecreatBy.SetValue(currentObj, "Default");

            PropertyInfo propertyInfoDateModBy = currentObj.GetType().GetProperty("Date_Modified_By");
            propertyInfoDateModBy.SetValue(currentObj, "Default");
        }
        public int CreateUser(DataAccess.User usr)
        {
            using (var db = new InfoSecSurveyEntities())
            {
                SetCommonProperties<DataAccess.User>(usr);
                usr.RoleID = 2;
                usr.OrganizationId = 3;
                db.Users.Add(usr);
                db.SaveChangesAsync().Wait();
                return usr.UserId;
            }

        }




        //public int CreateOrganization(DataAccess.Organization org)
        //{
        //    using (var db = new InfoSecSurveyEntities())
        //    {
        //        db.Organizations.Add(org);
        //        db.SaveChanges();
        //        return org.OrganizationId;
        //    }

        //}
    }
}

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
            using (var db = new InfoSecSurveyEntities())
            {
                var orgDetails = db.Organizations.Where(x => x.OrganizationId == 3).FirstOrDefault();
                org.OrganizationID = orgDetails.OrganizationId;
                org.City = orgDetails.City;
                org.Country = orgDetails.Country;
                org.State = orgDetails.State;
                org.OrganizationName = orgDetails.Organization_Name;
                org.AuditingOrg = db.Organizations.Where(x => x.Survey_OrganizationId == orgDetails.Survey_OrganizationId).FirstOrDefault().Organization_Name;
                List<Question> qsL = new List<Question>();
                Question q;
                
                foreach (var qsn in db.Questionnaires.ToList())
                {
                    q = new Question();
                    q.qs = new QuestionSection();
                    var qsnSec = db.Questionnaire_Section.Where(x => x.SectionId == qsn.SectionId).First();
                    q.qs.QuestionSectionID = qsnSec.SectionId;
                    q.qs.QuestionSecDescription = qsnSec.Section_Description;
                    int yesCount = 0;
                    int noCount = 0;
                    var qsnInstList = db.Questionnaire_Instance.Where(x => x.QuestionId == qsn.QuestionId).Select(x => x.Questionnaire_InstanceId);
                    foreach(var qsnInst in qsnInstList)
                    {
                        var ans = db.AnswerInstances.First(x => x.Questionnaire_InstanceId == qsnInst).AnswerId;
                        if(ans.Equals(1))
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
                    q.QuestionID = qsn.QuestionId;
                    q.QuestionDescription = qsn.Description;
                    qsL.Add(q);
                }
                org.QsnList = qsL;
            }
            
            return org;
        }


        public List<OrgEnt> GetParticipatingOrganizations()
        {
            using (var db = new InfoSecSurveyEntities())
            {
                var orgs = db.Organizations.Where(x => x.OrganizationId != -1).ToList();
                List<OrgEnt> lstOrgEnt = new List<OrgEnt>();
                foreach(var i in orgs)
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

            var userEmail = allResponses[1];
            if (!IsEmailExisting(userEmail))
            {
                Logger.InfoFormat("Importing data of the id {0} ...", userEmail);
                var firstName = allResponses[53];
                var lastName = allResponses[54];
                User u = new User();
                u.UserName = firstName + " " + lastName;
                u.User_EmailId = userEmail;
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

using InformationSecurityScorecard.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using InformationSecurityScorecard.Implementations;
using InformationSecurityScorecard.DocumentGeneration;
namespace InformationSecurityScorecard.UnitTests
{
    [TestClass]
    public class LoggerTest
    {
        [TestMethod]
        public void TestInfoLogging()
        {
            Logging.Logger.Info("Demo to mohini");
            Logging.Logger.Info("Info Logging from Test");
            Logging.Logger.InfoFormat("Info Logging from Test at this time {0} successfully ? ",DateTime.Now.ToString());

            Logging.Logger.Warn("Warn Logging from Test");
            Logging.Logger.WarnFormat("Warn Logging from Test at this time {0} successfully ? ", DateTime.Now.ToString());
            
            Logging.Logger.Error("Error Logging from Test");
            Logging.Logger.ErrorFormat("Error Logging from Test at this time {0} successfully ? ", DateTime.Now.ToString());
        }

       [TestMethod]
       public void TestInsertOrganization()
        {
            DataAccess.Organization org = new Organization();
            org.Organization_Name = "Org" + new Random().Next().ToString();
            //org.Organization_Name = "University at Buffalo";
            org.City = "Buffalo";
            org.Country = "USA";
            org.State = "New York";
            org.Survey_OrganizationId = -1;
           
            Implementations.Implementations imp = new Implementations.Implementations();
            var i = imp.CreateOrganization(org);
        }

        [TestMethod]
        public void TestDocumentGenerate()
        {
            //DocumentGenerator dg = new DocumentGenerator();
            //dg.GenerateDocument();
            ITextSharpDocGenerator d = new ITextSharpDocGenerator();
            d.CreateTable();
        }

        [TestMethod]
        public void TestInsertUser()
        {
            DataAccess.User usr = new User();
            usr.UserName = "FName" + " " + "LNAME";
            usr.User_EmailId = "abcd" + new Random().Next().ToString() + "@msn.com";
            
            Implementations.Implementations imp = new Implementations.Implementations();
            var i = imp.CreateUser(usr);
        }

        [TestMethod]
        public void TestSurveyInsert()
        {
            DataAccess.User usr = new User();
            usr.UserName = "FName" + " " + "LNAME";
            usr.User_EmailId = "abcd" + new Random().Next().ToString() + "@msn.com";

            Implementations.Implementations imp = new Implementations.Implementations();
            var i = imp.CreateUser(usr);

            Survey s = new Survey();
            s.UserId = i;
            var sID = imp.CreateSurvey(s);
        }

        [TestMethod]
        public void FindOneOrganizationsByEntity()
        {
            using (var db = new InfoSecSurveyEntities())
            {
                Assert.IsTrue(db.Organizations.Any(x => x.OrganizationId == -1));


            }
        }
    }
}

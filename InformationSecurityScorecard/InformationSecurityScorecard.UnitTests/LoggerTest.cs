using InformationSecurityScorecard.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace InformationSecurityScorecard.UnitTests
{
    [TestClass]
    public class LoggerTest
    {
        [TestMethod]
        public void TestInfoLogging()
        {
            Logging.Logger.Info("Info Logging from Test");
            Logging.Logger.InfoFormat("Info Logging from Test at this time {0} successfully ? ",DateTime.Now.ToString());

            Logging.Logger.Warn("Warn Logging from Test");
            Logging.Logger.WarnFormat("Warn Logging from Test at this time {0} successfully ? ", DateTime.Now.ToString());
            
            Logging.Logger.Error("Error Logging from Test");
            Logging.Logger.ErrorFormat("Error Logging from Test at this time {0} successfully ? ", DateTime.Now.ToString());
        }

        [TestMethod]
        public void FindOneOrganizations()
        {
            using (var db = new InfoSecScorecardEntities())
            {
                var clientIdParameter = new SqlParameter("OrgID", -1);
                List<string> lst = new List<string>();
                lst.Add("@"+clientIdParameter.ParameterName);
                var a = clientIdParameter.ParameterName;
                var result = db.Database
                  .SqlQuery<Org>("FindOneOrganizations @OrgID", clientIdParameter)
                  .ToList();

              
            }
        }

        [TestMethod]
        public void FindOneOrganizationsByEntity()
        {
            using (var db = new InfoSecScorecardEntities())
            {
                Assert.IsTrue(db.Organizations.Any(x => x.OrganizationId == -1));


            }
        }
    }
}

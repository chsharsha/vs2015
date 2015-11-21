using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;

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
    }
}

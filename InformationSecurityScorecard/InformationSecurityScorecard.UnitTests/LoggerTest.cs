using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace InformationSecurityScorecard.UnitTests
{
    [TestClass]
    public class LoggerTest
    {
        [TestMethod]
        public void TestInfoLogging()
        {
            InformationSecurityScorecard.Logging.Logger.LogMessage("Logging from Test");
        }
    }
}

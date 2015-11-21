using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.UnitTests
{

    [TestClass]
    public class CommunicationTest
    {

        [TestMethod]
        public void TestCommunication()
        {
            CommunicationModule.CommunicationManager cm = new CommunicationModule.CommunicationManager();
            cm.SendEmail();
        }
    }
}

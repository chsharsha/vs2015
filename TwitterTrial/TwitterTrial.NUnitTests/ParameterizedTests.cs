using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using TwitterTrial.Identity;
using TwitterTrial.Implementations;
using TwitterTrial.Entities;
using TwitterTrial.DBContext;
using System.Text.RegularExpressions;

namespace TwitterTrial.NUnitTests
{
    [TestFixture]
    public class ParameterizedTests
    {
        [TestCase(1,2,3)]
        public void TestCaseSucceeds(int a,int b,int c)
        {
            Assert.That(a + b, Is.EqualTo(c));
        }

        [TestCase("no handle at all",0)]
        [TestCase("@handle",1)]
        [TestCase("@Iam giving two @handles here",2)]
        [TestCase("@ @ @ @@ @",0)]
        [TestCase("@ @ @ @handling @", 1)]
        [TestCase("@ @ @ @ @ handle", 0)]
        public void RegExTest(string msg,int count)
        {
            TweetManagement tm = new TweetManagement();
            Assert.That(tm.ExtractTwitterHandles(msg).Count, Is.EqualTo(count));
        }

       [Test]
       public void SendTweet()
        {
            Implementations.TweetManagement tm = new TweetManagement();
            Tweet t = new Tweet();
                      
            t.TwitterUserID = "08c132ac-302e-49a7-b458-2ae862dfe767";
            t.TimeParsed = DateTime.Now;
            t.TweetMessage = "@chsharsha2 This is my last tweet for the test";
            t.TweetMsgMode = 1;
            //var x=tm.SendTweet(t);
            using (var con = TwitterDbContext.Create())
            {
                //Checking commit
                con.Tweets.Add(t);
                con.SaveChanges();
            }
        }

        [Test]
        public void GetTweet()
        {
            TweetManagement tm = new TweetManagement();
            var m=tm.GetTweets("9cc0efb5-15fa-4ccf-9440-5f25a35fdfc3");
        }


      

    }
}

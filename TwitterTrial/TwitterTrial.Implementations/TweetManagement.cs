using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using TwitterTrial.DBContext;
using TwitterTrial.Entities;
using TwitterTrial.Interfaces;

namespace TwitterTrial.Implementations
{
    public class TweetManagement : ITweetManagement
    {
       public TwitterDbContext GetDBContext()
        {
            return TwitterDbContext.Create();
        }


        public List<Tweet> GetTweets(string userID)
        {
            using (var db = GetDBContext())
            {
                return db.Tweets.Where(x => x.TwitterUserID == userID).ToList();
            }
        }
        public void SendTweet(Tweet msg)
        {
            using (var db = GetDBContext())
            {
                msg.TimeParsed = DateTime.Now; 
                
                
                var embeddedHandles = ExtractTwitterHandles(msg.TweetMessage);
                msg.TweetMsgMode = embeddedHandles.Count == 0 ? 3 : 2;
                db.Tweets.Add(msg);
                if (embeddedHandles.Count>0)
                {
                    foreach(var handle in embeddedHandles)
                    {
                        db.TwitterInbox.Add(new TwitterInbox() { RecipientName = handle, TweetID = msg.TweetID });
                    }
                }

                db.SaveChanges();
                
                
            }
        }


        public List<string> ExtractTwitterHandles(string TweetMsg)
        {
            List<string> lstUsers = new List<string>();
            Regex regex = new Regex(@"@\w{1,15}");

            var n = regex.Matches(TweetMsg);

            foreach (var match in n)
            {
                lstUsers.Add(match.ToString());

            }
            return lstUsers;
        }






    }
}

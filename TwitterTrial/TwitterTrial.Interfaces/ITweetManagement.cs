using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TwitterTrial.Entities;

namespace TwitterTrial.Interfaces
{
    public interface ITweetManagement
    {
        void SendTweet(Tweet TweetMessage);

        List<Tweet> GetTweets(string userID);
    }
}

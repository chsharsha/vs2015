using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Interfaces
{
    public interface ITweetManagement
    {
        void SendTweet(string TweetMessage);

        void GetTweet();
    }
}

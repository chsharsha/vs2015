using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Entities
{
    public class Tweet
    {
        public int TweetID { get; set; }

        public string TwitterUserID { get; set; }

        public string TweetMessage { get; set; }

        public int TweetMsgMode { get; set; }

        public DateTime? TimeParsed { get; set; }
                
        public virtual TwitterUser TwitterUser { get; set; }


    }

    public enum TweetMode
    {
        Incoming =1,
        OutGoing=2,
        Neutral=3
       
    }
}

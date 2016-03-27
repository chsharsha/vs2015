using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Entities
{
    public class TwitterInbox
    {
        public int TwitterInboxID { get; set; }

        public int TweetID { get; set; }

        public string RecipientName { get; set; }

        public virtual Tweet tweets { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Interfaces
{
    public interface ITwitterUserManagement
    {
        bool FollowUser(string twitterHandle);

        bool UnfollowUser(string twitterHandle);

    }
}

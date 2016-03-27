using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using TwitterTrial.Entities;

namespace TwitterTrial.Identity
{
    public class TwitterAppSignInManager : SignInManager<TwitterUser, string>
    {
        public TwitterAppSignInManager(AppUserManager userManager, IAuthenticationManager authenticationManager)
            : base(userManager, authenticationManager)
        {
        }

        public override Task<ClaimsIdentity> CreateUserIdentityAsync(TwitterUser user)
        {
            return user.GenerateUserIdentityAsync((AppUserManager)UserManager);
        }

        public static TwitterAppSignInManager Create(IdentityFactoryOptions<TwitterAppSignInManager> options, IOwinContext context)
        {
            return new TwitterAppSignInManager(context.GetUserManager<AppUserManager>(), context.Authentication);
        }
    }
}

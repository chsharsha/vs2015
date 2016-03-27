using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using TwitterTrial.DBContext;
using TwitterTrial.Entities;

namespace TwitterTrial.Identity
{
    public class AppUserManager : UserManager<TwitterUser>
    {
        public AppUserManager(IUserStore<TwitterUser> store)
            : base(store)
        {
        }

        
        public static AppUserManager Create(
            IdentityFactoryOptions<AppUserManager> options, IOwinContext context)
        {
            var manager = new AppUserManager(new UserStore<TwitterUser>(context.Get<TwitterDbContext>()));
            
            return manager;
        }
    }
}

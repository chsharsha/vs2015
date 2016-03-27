using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Entities
{
    public class TwitterUser : IdentityUser
    {
        [Required]
        public string TwitterUserName { get; set; }

        [Required]
        public string UserFullName { get; set; }


        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<TwitterUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }
}

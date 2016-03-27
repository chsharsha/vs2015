using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Entities
{
    public class TwitterRole : IdentityRole
    {
        public TwitterRole() : base() { }
        public TwitterRole(string name) : base(name) { }
        // extra properties here 
    }
}

using Microsoft.AspNet.Identity.EntityFramework;
using System;

namespace WebApplication3.Models
{
    public class TheWorldUser : IdentityUser
    {
        public DateTime FirstTrip { get; set; }
    }
}
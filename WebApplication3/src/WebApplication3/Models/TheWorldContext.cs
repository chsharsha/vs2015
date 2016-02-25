using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace WebApplication3.Models
{
    public class TheWorldContext : DbContext
    {
        public TheWorldContext()
        {
            Database.EnsureCreated();
        }

        
        public DbSet<Trip> Trips { get; set; }

        public DbSet<Stop> Stops { get; set; }

        public DbSet<Testo> Testos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connString = Startup.Configuration["Data:WorldContextConnection"];
            optionsBuilder.UseSqlServer(connString);
            
            base.OnConfiguring(optionsBuilder);
        }
    }
}

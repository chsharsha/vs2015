﻿//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.Data.Entity;

//namespace WebApplication3.Models
//{
//    public class WorldContext : DbContext
//    {
//        public DbSet<Trip> Trips { get; set; }

//        public DbSet<Stop> Stops { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            optionsBuilder.UseSqlServer();
//            base.OnConfiguring(optionsBuilder);
//        }
//    }
//}
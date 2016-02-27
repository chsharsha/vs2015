using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.PlatformAbstractions;
using WebApplication3.Models;
using WebApplication3.Services;
using Serilog;
using System.IO;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using WebApplication3.ViewModels;
using AutoMapper;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Authentication.Cookies;
using System.Net;

namespace WebApplication3
{
    public class Startup
    {
        public static IConfigurationRoot Configuration;
        public Startup(IApplicationEnvironment appEnv)
        {
            Log.Logger = new LoggerConfiguration().MinimumLevel.Warning().WriteTo.RollingFile(Path.Combine(appEnv.ApplicationBasePath, "log-{Date}.txt")).CreateLogger();
            var builder = new ConfigurationBuilder()
                .SetBasePath(appEnv.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(opt =>
                {
                    opt.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                });

            services.AddIdentity<TheWorldUser, IdentityRole>(config =>
            {

                config.User.RequireUniqueEmail = true;
                config.Password.RequiredLength = 8;
                config.Cookies.ApplicationCookie.LoginPath = "/Auth/Login";
                config.Cookies.ApplicationCookie.Events = new CookieAuthenticationEvents()
                {

                    OnRedirectToLogin = ctx =>
                    {
                        if (ctx.Request.Path.StartsWithSegments("/api") && ctx.Response.StatusCode == (int)HttpStatusCode.OK)
                        {
                            ctx.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
                        }
                        else
                        { 
                        ctx.Response.Redirect(ctx.RedirectUri);
                        }
                        return Task.FromResult(0);
                    }
                };

            }).AddEntityFrameworkStores<TheWorldContext>();

           
            services.AddScoped<IMailService, MailService>();
            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<TheWorldContext>();

            services.AddTransient<TheWorldContextSeedData>();
            services.AddTransient<TestoSeeder>();
            services.AddScoped<ITheWorldRepository, TheWorldRepository>();
            services.AddScoped<CoordService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public async void Configure(IApplicationBuilder app, TheWorldContextSeedData seeder, TestoSeeder testSeeder, ILoggerFactory loggerfactory)
        {
            app.UseStaticFiles();
            app.UseIdentity();
            Mapper.Initialize(config =>
            {
                config.CreateMap<Trip, TripViewModel>().ReverseMap();
                config.CreateMap<Stop, StopViewModel>().ReverseMap();
                
            });

            app.UseMvc(config =>
            {
                config.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" }

                        );
            });

            await seeder.EnsureSeedDataAsync();
            testSeeder.EnsureTestoSeed();
            loggerfactory.AddSerilog();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}

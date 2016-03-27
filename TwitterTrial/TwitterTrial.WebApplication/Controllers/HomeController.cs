using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TwitterTrial.Identity;
using TwitterTrial.ViewModels;
using Microsoft.AspNet.Identity.Owin;
using TwitterTrial.Entities;
using System.Threading.Tasks;

namespace TwitterTrial.WebApplication.Controllers
{
    public class HomeController : Controller
    {

        private TwitterAppSignInManager _signInManager;
        private AppUserManager _userManager;
        public ActionResult Index()
        {
            return View();
        }
        public HomeController()
        {

        }

        public HomeController(AppUserManager userManager, TwitterAppSignInManager signInManager)
        {
            UserManager = userManager;
            SignInManager = signInManager;
        }

        public TwitterAppSignInManager SignInManager
        {
            get
            {
                return _signInManager ?? HttpContext.GetOwinContext().Get<TwitterAppSignInManager>();
            }
            private set
            {
                _signInManager = value;
            }
        }

        public AppUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.GetOwinContext().GetUserManager<AppUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }

        [HttpPost]
        public async Task<JsonResult> Register(RegisterNewUser rvm)
        {

            if (ModelState.IsValid)
            {
                var user = new TwitterUser { UserFullName = rvm.FullName, Email = rvm.Email, TwitterUserName = rvm.TwitterName };
                var result = await UserManager.CreateAsync(user, rvm.Password);
                if (result.Succeeded)
                {
                    await SignInManager.SignInAsync(user, false, false);
                    return Json(true);
                }
                else
                    return Json(false);
                
            }

            return Json(false);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
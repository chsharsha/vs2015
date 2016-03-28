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
using TwitterTrial.Interfaces;
using TwitterTrial.Implementations;

namespace TwitterTrial.WebApplication.Controllers
{

    [Authorize]
    public class HomeController : Controller
    {

        private TwitterAppSignInManager _signInManager;
        private AppUserManager _userManager;
        public ActionResult Index()
        {
            return RedirectToAction("SendTweet","Home");
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

       
        public ActionResult SendTweet()
        {
            ITweetManagement tm = new TweetManagement();
            var m = User.Identity.Name;
            var user = UserManager.FindByNameAsync(User.Identity.Name).Result.Id;
            var tweets = tm.GetTweets(user).OrderByDescending(t=>t.TweetID).ToList();

            return View(tweets);
        }


        

        [HttpPost]
        public JsonResult SendTweetPost(Tweet t)
        {
            var m = User.Identity.Name;
            var user = UserManager.FindByNameAsync(User.Identity.Name).Result.Id;
            t.TwitterUserID = user;
            ITweetManagement tm = new TweetManagement();
            tm.SendTweet(t);
            return Json("Success");
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
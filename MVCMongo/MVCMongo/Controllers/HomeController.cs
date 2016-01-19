using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCMongo.Controllers
{
    public class HomeController : Controller
    {
        public IMongoDatabase Database;
        public HomeController()
        {
            var client = new MongoClient();
            Database = client.GetDatabase("realestate");
            
        }
        public ActionResult Index()
        {
            Database.CreateCollection("testing");
            var m=Database.ListCollections();
            return View();
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
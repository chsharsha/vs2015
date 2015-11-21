using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace InformationSecurityScorecard.WebApplication.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            if(Request.QueryString.HasKeys())
            {
                return View();
            }
            else
            {
                return View("Error");
            }
            
        }

        public ActionResult Error()
        {
            return View();
        }
    }
}
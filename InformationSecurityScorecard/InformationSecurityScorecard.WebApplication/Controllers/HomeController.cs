using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InformationSecurityScorecard.WebApplication.Models;
using InformationSecurityScorecard.Implementations;
namespace InformationSecurityScorecard.WebApplication.Controllers
{




    //public class BaseController : Controller
    //{
    //    protected override void OnActionExecuting(ActionExecutingContext filterContext)
    //    {
    //        base.OnActionExecuting(filterContext);

    //        // If the current user is authenticated, check to make sure the user's
    //        // profile has been loaded into session
    //        if (HttpContext.Session["LoggedinUser"] == null)
    //        {
    //            Session["LoggedinUser"] = "In";
    //        }
    //    }
    //}
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            Implementations.Implementations imp = new Implementations.Implementations();

            ViewBag.AllDetails = imp.GetParticipatingOrganizations();
            return View();
            //PreRequestCheckList.AuthenticateRequest(Request);

            //if (Session["LoggedinUser"] != null)
            //{
            //    var a = Session["LoggedinUser"].ToString();
            //    return View();
            //}

            //else
            //{
            //    return View("Error");
            //}
        }


        public ActionResult ShowStatistics()
        {
            Implementations.Implementations imp = new Implementations.Implementations();

            ViewBag.AllDetails = imp.GetDetails();
            return View();
            
        }

        public ActionResult Error()
        {
            
            Exception ex =(Exception) RouteData.Values["error"];
            ViewBag.ErrorMsg = ex.Message;
            return View();
        }

        
    }
}
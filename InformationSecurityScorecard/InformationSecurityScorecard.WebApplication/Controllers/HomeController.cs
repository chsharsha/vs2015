using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using InformationSecurityScorecard.WebApplication.Models;
using InformationSecurityScorecard.Implementations;
using System.Net.Mail;

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
            
        }


        public ActionResult ShowStatistics()
        {
            if (Session["AllDetails"] == null)
            {
                Implementations.Implementations imp = new Implementations.Implementations();

                var allDetails = imp.GetDetails();
                Session["AllDetails"] = allDetails;
                ViewBag.AllDetails = allDetails;
            }
            else
            {
                var getDetails = (Entities.Organization)Session["AllDetails"];
                ViewBag.AllDetails = getDetails;
            }

            return View();

        }

        [HttpPost]
        public ActionResult FetchData()
        {
            var minExp = Request.Form["minExp"].ToString();
            var maxExp = Request.Form["maxExp"].ToString();
            var DropDownVal = Request.Form["ddlDropDownList"].ToString();
            var resultNotice = "Showing results for ";
            Implementations.Implementations imp = new Implementations.Implementations();
            Entities.Organization org = new Entities.Organization();
            bool bothExpNull = minExp.Equals(string.Empty) && maxExp.Equals(string.Empty);
            if (!DropDownVal.Equals(string.Empty) && bothExpNull)
            {
                org = imp.GetDetails(Int32.Parse(DropDownVal));
                resultNotice += "the department " + imp.GetDepartments().First(x => x.ID == Int32.Parse(DropDownVal)).Value;
            }
            else if (DropDownVal.Equals(string.Empty))
            {
                org = imp.GetDetails(Int32.Parse(minExp), Int32.Parse(maxExp));
                resultNotice += " minimum workex of " + minExp + " months and maximum workex of " + maxExp + " months";
            }
            else
            {
                org = imp.GetDetails(Int32.Parse(minExp), Int32.Parse(maxExp), Int32.Parse(DropDownVal));
                resultNotice += " minimum workex of " + minExp + " months and maximum workex of " + maxExp + " months and belonging to the department " + imp.GetDepartments().First(x => x.ID == Int32.Parse(DropDownVal)).Value;
            }
            TempData["orgEnt"] = org;
            TempData["bannerMsg"] = resultNotice;
            return RedirectToAction("FilteredResults", "Home");
        }
        public ActionResult ShowFilterPage()
        {

            Implementations.Implementations imp = new Implementations.Implementations();
            ViewBag.DeptList = new SelectList(imp.GetDepartments(), "ID", "Value");
            return View();

        }

        public FileResult Download()
        {
            Entities.Organization org = new Entities.Organization();
            if (Session["AllDetails"] == null)
            {
                Implementations.Implementations imp = new Implementations.Implementations();
                org = imp.GetDetails();
                Session["AllDetails"] = org;
            }
            else
            {
                var getDetails = (Entities.Organization)Session["AllDetails"];
                org = getDetails;
            }
                
            DocumentGeneration.ITextSharpDocGenerator i = new DocumentGeneration.ITextSharpDocGenerator();
            var fileName = i.CreateOrgTable(org);


            byte[] fileBytes = System.IO.File.ReadAllBytes(fileName);
            string fileNameDL = "SurveyResults.pdf";
            return File(fileBytes, System.Net.Mime.MediaTypeNames.Application.Octet, fileNameDL);
        }

        public ActionResult FilteredResults()
        {
            var m = (Entities.Organization)TempData["orgEnt"];
            ViewBag.AllDetails = m;
            ViewBag.BannerMsg = TempData["bannerMsg"].ToString();
            return View();

        }

        public ActionResult EmailPage()
        {

            return View();
        }


        [HttpPost]
        public ActionResult SendEmails(List<string> str)
        {
            Entities.Organization org = new Entities.Organization();
            Implementations.Implementations imp = new Implementations.Implementations();
            if (Session["AllDetails"] == null)
            {
                
                org = imp.GetDetails();
                Session["AllDetails"] = org;
            }
            else
            {
                var getDetails = (Entities.Organization)Session["AllDetails"];
                org = getDetails;
            }
            DocumentGeneration.ITextSharpDocGenerator i = new DocumentGeneration.ITextSharpDocGenerator();
            var fileName = i.CreateOrgTable(org);
            var list = str.First();
            List<string> strList = new List<string>();
            var arr = list.Split(';');
            arr.ToList().ForEach(x => AddIfPasses(x,strList));
            
            imp.SendEmail(strList, fileName);
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        public bool IsValid(string emailaddress)
        {
            try
            {
                MailAddress m = new MailAddress(emailaddress);

                return true;
            }
            catch (FormatException)
            {
                return false;
            }
        }

        internal void AddIfPasses(string email,List<string> lstStr)
        {
            if(IsValid(email))
            {
                lstStr.Add(email);
            }
        }
        public ActionResult Error()
        {

            Exception ex = (Exception)RouteData.Values["error"];
            ViewBag.ErrorMsg = ex.Message;
            return View();
        }


    }
}
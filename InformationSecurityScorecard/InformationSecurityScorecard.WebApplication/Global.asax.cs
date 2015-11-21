using InformationSecurityScorecard.WebApplication.Controllers;
using InformationSecurityScorecard.WebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace InformationSecurityScorecard.WebApplication
{
    public class MvcApplication : System.Web.HttpApplication
    {

        private static List<string> SQLKeywords = new string[]
     {
            // code to use it in the "Application_BeginRequest" method to prevent "ASCII Encoded/Binary String Automated SQL Injection Attack" on the Website     

            ";", "--", "EXECUTE ", "EXEC(", "SELECT ", "INSERT ", "UPDATE ", "DELETE ", "CREATE ",
            "TRUNCATE ", "DROP ", "ALTER TABLE ", "TABLE ", "DATABASE ", "WHERE ", "ORDER BY ", "GROUP BY ",
            "DECLARE ", "CAST(", "CONVERT(", "VARCHAR(", "NVARCHAR("
     }.ToList();

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }

        //protected void Application_AcquireRequestState(object sender, EventArgs e)
        //{
        //    HttpContext context = HttpContext.Current;
        //    if (context != null && context.Session != null)
        //    {
        //        context.Session["LoggedinUser"] = "In";
        //    }
        //}

        //protected void Application_BeginRequest(object sender, EventArgs e)
        //{

        //    HttpRequest hr = Context.Request;

        //    if (hr.QueryString.HasKeys())
        //    {
        //        if (SQLKeywords.Any(x => hr.RawUrl.ToLower().Contains(x.Trim().ToLower())))
        //        {
        //            throw new Exception("Illegal character sequence characters in url");
        //        }
        //        if (!PreRequestCheckList.IsValidRequest(hr))
        //        {
        //            throw new Exception("Incorrect arguments passed in the query string");
        //        }
        //        if (!PreRequestCheckList.IsParamsCountCorrect(hr))
        //        {
        //            throw new Exception("Incorrect number of arguments passed in the query string");
        //        }


        //    }
        //    else
        //    {
        //        throw new Exception("Application doesnt have query strings");
        //    }

        //}

        protected void Application_Error(object sender, EventArgs e)
        {
            HttpContext ctx = HttpContext.Current;
            ctx.Response.Clear();
            Exception exception = Server.GetLastError();
            Response.Clear();

            HttpException httpException = exception as HttpException;
            RouteData routeData = new RouteData();
            routeData.Values.Add("controller", "Home");
            if (httpException == null)
            {
                routeData.Values.Add("action", "Error");
            }
            else //It's an Http Exception, Let's handle it.
            {
                switch (httpException.GetHttpCode())
                {
                    case 404:
                        // Page not found.
                        routeData.Values.Add("action", "HttpError404");
                        break;
                    case 500:
                        // Server error.
                        routeData.Values.Add("action", "HttpError500");
                        break;

                    // Here you can handle Views to other error codes.
                    // I choose a General error template  
                    default:
                        routeData.Values.Add("action", "General");
                        break;
                }
            }
            routeData.Values.Add("error", exception);
            Server.ClearError();

            // Avoid IIS7 getting in the middle
            Response.TrySkipIisCustomErrors = true;

            // Call target Controller and pass the routeData.
            IController errorController = new HomeController();
            errorController.Execute(new RequestContext(
                    new HttpContextWrapper(Context), routeData));
            HttpContext.Current.ApplicationInstance.CompleteRequest();
        }
            }
}

using System;
using System.Collections.Generic;
using System.Linq;

using System.Web;

namespace InformationSecurityScorecard.WebApplication.Models
{
    public static class PreRequestCheckList
    {
        private static List<string> SQLKeywords = new string[]
    {
            // code to use it in the "Application_BeginRequest" method to prevent "ASCII Encoded/Binary String Automated SQL Injection Attack" on the Website     

            ";", "--", "EXECUTE ", "EXEC(", "SELECT ", "INSERT ", "UPDATE ", "DELETE ", "CREATE ",
            "TRUNCATE ", "DROP ", "ALTER TABLE ", "TABLE ", "DATABASE ", "WHERE ", "ORDER BY ", "GROUP BY ",
            "DECLARE ", "CAST(", "CONVERT(", "VARCHAR(", "NVARCHAR("
    }.ToList();

        public static bool IsValidRequest(HttpRequestBase htp)
        {
            if (htp.QueryString.HasKeys())
            {
                if (!String.IsNullOrEmpty(htp.QueryString["userid"]) && !String.IsNullOrEmpty(htp.QueryString["qid"]))
                {
                    return true;
                }
                else
                {
                    return false;
                }

            }
            else
            {
                return false;
            }
        }

        public static bool IsParamsCountCorrect(HttpRequestBase htp)
        {
            if (htp.QueryString.Keys.Count==2)
            {
                return true;

            }
            else
            {
                return false;
            }
        }


        public static void AuthenticateRequest(HttpRequestBase hr)
        {
            HttpContext context = HttpContext.Current;
            if(context.Session["LoggedinUser"]==null)
            {
                if (hr.QueryString.HasKeys())
                {
                    if (SQLKeywords.Any(x => hr.RawUrl.ToLower().Contains(x.Trim().ToLower())))
                    {
                        throw new Exception("Illegal character sequence characters in url");
                    }
                    if (!PreRequestCheckList.IsValidRequest(hr))
                    {
                        throw new Exception("Incorrect arguments passed in the query string");
                    }
                    if (!PreRequestCheckList.IsParamsCountCorrect(hr))
                    {
                        throw new Exception("Incorrect number of arguments passed in the query string");
                    }

                    context.Session["LoggedinUser"] = "In";
                }
                else
                {
                    throw new Exception("Application doesnt have query strings");
                }
               
                
            }
            else if (!context.Session["LoggedinUser"].ToString().Equals("In"))
            {
                throw new Exception("Session incorrectly set");
            }





        }
    }
}
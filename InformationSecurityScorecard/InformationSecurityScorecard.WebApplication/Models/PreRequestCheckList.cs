using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace InformationSecurityScorecard.WebApplication.Models
{
    public static class PreRequestCheckList
    {
        public static bool IsValidRequest(HttpRequest htp)
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

        public static bool IsParamsCountCorrect(HttpRequest htp)
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
    }
}
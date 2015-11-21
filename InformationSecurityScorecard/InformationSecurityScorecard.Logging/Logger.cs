using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.Logging
{
    public static class Logger
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public static void Info(string message)
        {
            log.Info(message);
        }

        public static void InfoFormat(string format,params object[] args)
        {
            log.InfoFormat(format, args);
        }


        public static void Warn(string message)
        {
            log.Warn(message);
        }

        public static void WarnFormat(string format, params object[] args)
        {
            log.WarnFormat(format, args);
        }

        //

        public static void Error(string message)
        {
            log.Error(message);
        }

        public static void ErrorFormat(string format, params object[] args)
        {
            log.ErrorFormat(format, args);
        }

    }
}

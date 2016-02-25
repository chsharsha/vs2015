using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class MailService : IMailService
    {
        public bool SendEmail(string to,string from,string subject,string body)
        {
            return true;
        }
    }
}

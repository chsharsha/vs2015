using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IMailService
    {
        bool SendEmail(string to, string from, string subject, string body);
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Mail;
namespace InformationSecurityScorecard.CommunicationModule
{
    public class CommunicationManager
    {
        public void SendEmail()
        {
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new System.Net.NetworkCredential("chshandroid@gmail.com", "ramadevi3967"),
                EnableSsl = true
            };

            string s = @"<p>Welcome to SiteName. To activate your account, visit this URL: <a href=http://SiteName.com/a?key=1234>http://SiteName.com/a?key=1234</a>.</p>";
            MailMessage mail = new MailMessage("chshandroid@gmail.com", "tpotluri@buffalo.edu", "test3", s);
            mail.Attachments.Add(new Attachment(@"C:\hwork\twit.txt"));
            mail.IsBodyHtml = true;
            client.Send(mail);
        }
    }
}

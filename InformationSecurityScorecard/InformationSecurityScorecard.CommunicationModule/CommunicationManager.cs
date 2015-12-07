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
        public void SendEmail(List<string> addrList,string attFileName,string body,string fromAddress,string Subject)
        {
            
            var client = new SmtpClient("smtp.gmail.com", 587)
            {
                Credentials = new System.Net.NetworkCredential("dbms.ubmis2015@gmail.com", "Buffalo@2015"),
                EnableSsl = true
            };

            
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(fromAddress);
            mail.Subject = Subject;
            mail.Body = body;
            foreach(var i in addrList)
            {
                mail.To.Add(i);
            }
            mail.Attachments.Add(new Attachment(attFileName));
            mail.IsBodyHtml = true;
            client.Send(mail);
        }
    }
}

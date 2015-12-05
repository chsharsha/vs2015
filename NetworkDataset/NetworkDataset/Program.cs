using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NetworkDataset
{
    public class Host
    {
        public string SSID { get; set; }
        public string HostIP { get; set; }

        public string LocationID { get; set; }
    }

    public class BrowserVersions
    {
        public string BrowserName { get; set; }

        public int StartVersion { get; set; }

        public int LatestVersion { get; set; }
    }

    public static class ExtensionMethods
    {
        public static string AddComma(this string value)
        {
                        
            return value+",";
        }
    }

    public static class ToolKit
    {

        public static DateTime RandomDay(Random gen)
        {
            DateTime startDate = new DateTime(2015, 8, 1);
            DateTime endDate = DateTime.Today;
            TimeSpan timeSpan = endDate - startDate;
            
            TimeSpan newSpan = new TimeSpan(0, gen.Next(0, (int)timeSpan.TotalMinutes), 0);
            DateTime newDate = startDate + newSpan;


            return newDate;
            //int range = (DateTime.Today - start).Days;
            //return start.AddDays(gen.Next(range));
            

        }

        
      
        public static string RandomString(int Size, Random r)
        {
            string input = "0123456789";
            var chars = Enumerable.Range(0, Size)
                                   .Select(x => input[r.Next(0, input.Length)]);
            return new string(chars.ToArray());
        }

        public static string RandomIP(Random r)
        {
            var firstPart = Int32.Parse(RandomString(3, r));
            var secondPart = Int32.Parse(RandomString(3, r));
            var thirdPart = Int32.Parse(RandomString(3, r));
            var fourthPart = Int32.Parse(RandomString(3, r));
            return firstPart.ToString() + "." + secondPart.ToString() + "." + thirdPart.ToString() + "." + fourthPart.ToString();
        }

    }
    class Program
    {
        static void Main(string[] args)
        {
            Random r = new Random();
            string[] buildingNames = {"Lockwood","Clemens","Knox","Alfiero","Baldy","Capen","Talbert","Bell","Davis","Norton" };
            string[] floors = { " 1st Floor", " 2nd Floor", " 3rd Floor", " 4th Floor", " 5th Floor", " Ground Floor" };
            List<Host> lstHost = new List<Host>();
            lstHost.Add(new Host() { SSID = "UB Secure", LocationID = "856", HostIP = "10.221.179.01" });
            lstHost.Add(new Host() { SSID = "UB Gaming", LocationID = "714", HostIP = "10.224.12.54" });
            lstHost.Add(new Host() { SSID = "UB Guest", LocationID = "932", HostIP = "10.179.0.26" });
            var lstHostArray = lstHost.ToArray();


            List<BrowserVersions> lstBrowser = new List<BrowserVersions>();
            lstBrowser.Add(new BrowserVersions() { BrowserName = "Mozilla", StartVersion = 19, LatestVersion = 55 });
            lstBrowser.Add(new BrowserVersions() { BrowserName = "Chrome", StartVersion = 23, LatestVersion = 47 });
            lstBrowser.Add(new BrowserVersions() { BrowserName = "Safari", StartVersion = 3, LatestVersion = 6 });
            lstBrowser.Add(new BrowserVersions() { BrowserName = "iexplorer", StartVersion = 4, LatestVersion = 11 });

            var lstBrowserArray = lstBrowser.ToArray();


            List<string> lstString = new List<string>();
            lstString.Add(@"https://ublearns.buffalo.edu/");
            lstString.Add(@"https://archive.org/details/UrlListForAlexissample");
            lstString.Add(@"http://www.dotnetperls.com/extension");
            lstString.Add(@"http://www.boutell.com/newfaq/definitions/url.html");
            lstString.Add(@"http://www.boutell.com/newfaq/definitions/browser.html");
            lstString.Add(@"https://docs.oracle.com/cloud/latest/pbcs_common/CSPGS/pbcs_sample_urls.html");
            lstString.Add(@"http://google.com");
            lstString.Add(@"https://ublibrary.buffalo.edu/");
            lstString.Add(@"https://ublearns.buffalo.edu/bullseye");
            lstString.Add(@"https://ublearns.buffalo.edu/bizlink");
            lstString.Add(@"https://test-cloud-pln.pbcs.us1.oraclecloud.com/workspace");
            lstString.Add(@"https://msdn.com");
            lstString.Add(@"https://amazon.com");
            lstString.Add(@"https://sears.com");
            lstString.Add(@"https://bestbuy.com/");
            lstString.Add(@"https://arstecnica.com");
            lstString.Add(@"https://facebook.com");
            lstString.Add(@"https://gmail.com/");
            lstString.Add(@"https://google.com/docs/");
            lstString.Add(@"https://asp.net/forums");
            lstString.Add(@"https://twitter.com/");
            lstString.Add(@"https://github.com/");
            lstString.Add(@"https://stackoverflow.com/");

            var urlArray = lstString.ToArray();
            var filename = @"E:\Data\NetworkData" + new Random().Next(0, 450) + ".csv";
            using (FileStream fs = File.Create(filename))
            {
                var header = "StudentID,SSID,Location ID,Host IP,Timestamp,BrowserAgent,Target URL,Device ID,Location,IP Address,Latitude,Longitude";
                header = header + System.Environment.NewLine;
                Byte[] info = new UTF8Encoding(true).GetBytes(header);
                fs.Write(info, 0, info.Length);
                for (int i = 0; i < 200000; i++)
                {
                    if(i%50000==0)
                    {
                        Console.WriteLine("{0} records written to the stream", i);
                    }
                    string line = "";
                    var studentID = "50" + ToolKit.RandomString(6, r);
                    line += studentID.AddComma(); //StudentID
                    var newHost = lstHostArray[r.Next(0, lstHostArray.Length)];
                    line += newHost.SSID.AddComma(); //SSID
                    line += newHost.LocationID.AddComma();//Location ID
                    line += newHost.HostIP.AddComma();//HostIP
                    line += ToolKit.RandomDay(r).ToString("MM/dd/yyyy hh:mm:ss tt",CultureInfo.InvariantCulture).AddComma();//Timestamp

                    var browserAgent = lstBrowserArray[r.Next(0, lstBrowserArray.Length)];
                    line += (browserAgent.BrowserName + " " + r.Next(browserAgent.StartVersion, browserAgent.LatestVersion).ToString()).AddComma();
                    line += urlArray[r.Next(0, urlArray.Length)].AddComma();
                    line += ToolKit.RandomString(9, r).AddComma();
                    line += buildingNames[r.Next(0, buildingNames.Length)] + floors[r.Next(0, floors.Length)].AddComma();
                    line += ToolKit.RandomIP(r).AddComma();
                    line += "N " + "34." + ToolKit.RandomString(6, r).AddComma();
                    line += "W " + "118." + ToolKit.RandomString(6, r);
                    line += Environment.NewLine;
                    info = new UTF8Encoding(true).GetBytes(line);
                    fs.Write(info, 0, info.Length);
                }
            }
        }
    }
}

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;


namespace DownloadImages
{

    class ImageSave
    {
        public string Name { get; set; }
        public string URL { get; set; }
    }
    class Program
    {
        static void Main(string[] args)
        {
            using (WebClient webClient = new WebClient())
            {
                byte[] aa = webClient.DownloadData("ImageURL here");

                string mystring = "jpg";
                var filename = @"c:\temp\images\filename.jpg";
                using (FileStream fs = File.Create(filename))
                {
                    fs.Write(aa, 0, aa.Length);
                }
                var data = webClient.DownloadString("http://stackoverflow.com/questions/24797485/how-to-download-image-from-url-using-c-sharp");
                int a;
            }

                List<ImageSave> allInfo = new List<ImageSave>();
            var column1 = new List<string>();
            var column2 = new List<string>();
            Dictionary<int, string> newDic = new Dictionary<int, string>();
            using (var rd = new StreamReader(@"C:\temp\yes.csv"))
            {
                while (!rd.EndOfStream)
                {
                    //if (!rd.ReadLine().Contains("Link"))
                    //{
                        var splits = rd.ReadLine().Split(',');
                        column1.Add(splits[0]);
                        column2.Add(splits[1]);
                    allInfo.Add(new ImageSave{ Name = splits[0], URL = splits[1] });
                    //}
                }
            }
            //// print column1
            //Console.WriteLine("Column 1:");
            //foreach (var element in column1)
            //{
            //    if(!String.IsNullOrEmpty(element))
            //    Console.WriteLine(element);
            //}

            //// print column2
            //Console.WriteLine("Column 2:");
            //foreach (var element in column2)
            //{
            //    if (!(element.Contains("Link of")))
            //        Console.WriteLine(element);
            //}

            //foreach(var item in allInfo)
            //{
            //    if (!item.URL.Contains("Link of"))
            //    {

            //        using (WebClient webClient = new WebClient())
            //        {
            //            byte[] data = webClient.DownloadData(item.URL);
            //            string mystring = item.URL.Substring(item.URL.Length - 3);
            //            var filename = @"c:\temp\images\"+item.Name +"."+ mystring;
            //            using (FileStream fs = File.Create(filename))
            //            {
            //                fs.Write(data, 0, data.Length);
            //            }


            //        }
            //    }
            //}


            //using (WebClient webClient = new WebClient())
            //{
            //    byte[] data = webClient.DownloadData("http://ec2-54-161-123-121.compute-1.amazonaws.com/sampleimages/originals/55f773d1be9dfd64842a127e_DESIGN_original_christina_CO6DrbeUEAAZ74I.jpg");

            //    var filename = @"c:\temp\DummyFile" + new Random().Next(0, 450) + ".jpg";
            //    using (FileStream fs = File.Create(filename))
            //    {
            //        fs.Write(data, 0, data.Length);
            //    }


            //}
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Reflection;

namespace DummyDataset
{
    class Program
    {
        static void Main(string[] args)
        {
            Random r = new Random();
            
            var filename = @"c:\temp\DummyFile" + new Random().Next(0,450) + ".csv";
            using (FileStream fs = File.Create(filename))
            {
                int i = 0;
                int iCount = 0;
                while(fs.Length<4*1024*1024)
                {
                    var x = (Int32)(fs.Length) / (1024 * 1024);
                   
                    if (x>i)
                    {
                        i = x;
                        Console.WriteLine("{0} mb data written to the stream", i);
                    }
                    Byte[] info = new UTF8Encoding(true).GetBytes(new Toolkit().GetRandomRecord(r));
                    
                    fs.Write(info, 0, info.Length);
                    iCount++;
                }
                Console.WriteLine("Process finished... {0} records were written to the stream totally at the location {1}", iCount,filename);
                //for (int i = 0; i < 1000; i++)
                //{

                //    Byte[] info = new UTF8Encoding(true).GetBytes(new Toolkit().GetRandomRecord(r));
                //    Console.WriteLine(fs.Length);
                //    fs.Write(info, 0, info.Length);
                //}
                // Add some information to the file.

            }
            
            //using (var fs = new FileStream(filename, FileMode.Create, FileAccess.Write, FileShare.None))
            //{
               
            //    Toolkit tk = new Toolkit(); 
                
            //    using (StreamWriter sw = new StreamWriter(fs))
            //    {
            //        var currentLength = fs.Length;
            //        long length = sw.BaseStream.Length;

            //        while (currentLength < 10)
            //        {
            //            sw.WriteLine(tk.GetRandomRecord());
            //            currentLength = fs.Length;
                        
                        
            //        }
            //    }

            //}

            
        }
    }
}

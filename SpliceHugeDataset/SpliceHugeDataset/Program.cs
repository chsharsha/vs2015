using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpliceHugeDataset
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            int i = 0;
            using (StreamReader file = new StreamReader(@"E:\Data\crimesdataset.csv"))
            {
                //Open the write stream and wait for the write command
                using (FileStream fs = File.Create(@"E:\Data\splicedCrimesdata.csv"))
                {
                    while ((line = file.ReadLine()) != null)
                    {
                        line = line + System.Environment.NewLine;
                        Byte[] info = new UTF8Encoding(true).GetBytes(line);
                        fs.Write(info, 0, info.Length);
                        i++;
                        if(i%10000==0)
                        {
                            Console.WriteLine("{0} records have been written to stream", i);
                        }
                        if(i>200000)
                        {
                            break;
                        }
                    }
                }
            }
        }
    }
}

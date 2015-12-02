using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace OLAPDummyDataset
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> allFirstNames = new List<string>();
            List<string> allLastNames = new List<string>();
            Regex rgx = new Regex("[^a-zA-Z0-9 -]");
            using (StreamReader reader = new StreamReader(@"E:\Data\uniwuenames.txt"))
            {
                string line;
                
                while ((line = reader.ReadLine()) != null)
                {
                    
                    line = rgx.Replace(line, "");
                    line = line.Trim();
                    if(!String.IsNullOrEmpty(line))
                    {
                        allFirstNames.Add(line);
                    }
                }

                
            }

            using (StreamReader reader = new StreamReader(@"E:\Data\lastnames.txt"))
            {
                string line;

                while ((line = reader.ReadLine()) != null)
                {

                    line = rgx.Replace(line, "");
                    line = line.Trim();
                    if (!String.IsNullOrEmpty(line))
                    {
                        allLastNames.Add(line);
                    }
                }


            }


            var query = from x in allFirstNames
                        from y in allLastNames
                        select new { x, y };

            foreach(var m in query)
            {
                Console.WriteLine(m.x + " " + m.y);
            }

            Console.Write(query.Count());
            Console.ReadKey();
        }
    }
}

using Microsoft.VisualBasic.FileIO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.AdminUtility
{
    class Program
    {
        static void Main(string[] args)
        {
            using (TextFieldParser parser = new TextFieldParser(@"E:\Data\responses.csv"))
            {
                parser.CommentTokens = new string[] { "#" };
                parser.SetDelimiters(new string[] { "," });
                parser.HasFieldsEnclosedInQuotes = true;

                // Skip over header line.
                parser.ReadLine();

                while (!parser.EndOfData)
                {
                    string[] fields = parser.ReadFields();
                    var m = fields.ToList().Where(x => !String.IsNullOrEmpty(x)).ToList();
                    if(m.Count!=55)
                    {
                        continue;
                    }
                    Console.WriteLine(fields[53]);
                    //yield return new Brand()
                    //{
                    //    Name = fields[0],
                    //    FactoryLocation = fields[1],
                    //    EstablishedYear = int.Parse(fields[2]),
                    //    Profit = double.Parse(fields[3], swedishCulture)
                    //};
                }
            }
            Console.Read();
        }
    }
}

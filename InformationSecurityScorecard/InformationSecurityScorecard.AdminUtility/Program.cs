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
                    
                    Implementations.Implementations imp = new Implementations.Implementations();
                    imp.GetNewImports(fields);


                }
            }
            

            
        }
    }
}

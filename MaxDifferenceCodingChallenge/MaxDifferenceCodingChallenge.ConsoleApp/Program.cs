using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MaxDifferenceCodingChallenge.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            //var input = Console.ReadLine();
            var input = "{7, 2, 3, 10, 2, 4, 8, 1 }";
            
                        
            ParsingLogic p = ParsingLogic.Instance;
            Console.WriteLine(p.StartParsingInput(input));
            
        }

        
        
    }
}

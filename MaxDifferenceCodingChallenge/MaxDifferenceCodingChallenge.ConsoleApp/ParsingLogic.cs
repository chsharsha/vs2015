using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace MaxDifferenceCodingChallenge.ConsoleApp
{
    public sealed class ParsingLogic
    {
        private static ParsingLogic _instance = null;
        public static ParsingLogic Instance
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new ParsingLogic();

                }
                return _instance;
            }

            
        }


        public int StartParsingInput(string input)
        {
            var splitNums = input.TrimStart('{').TrimEnd('}').Split(',');
            var intList = new List<int>();

            splitNums.Where(x => Regex.IsMatch(x.Trim(), @"^\d+$")).ToList().ForEach(z => intList.Add(int.Parse(z)));

            var y = intList.ToArray();
            return ParseIntArray(y, new List<int>());

        }
        public int ParseIntArray(int[] input,List<int> diffs)
        {
            
            while (input.Length > 1)
            {
                var pivotNum = input[0];
                for (int i = 1; i < input.Length; i++)
                {
                    if(pivotNum < input[i])
                    diffs.Add(input[i]-pivotNum);
                }
                input = input.Skip(1).ToArray();
                ParseIntArray(input,diffs);

            }
            return diffs.Max();
        }
    }
}

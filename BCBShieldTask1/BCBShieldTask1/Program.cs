using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BCBShieldTask1
{
    class Program
    {
        public static void Main(string[] args)
        {

            new Solution().solution(100);
        }


    }




    class Solution
    {

        public void solution(int N)
        {
            if (ValidateInput(N))
            {
                StartEnumeration(N);
            }
            else
            {
                Console.WriteLine("Invalid Input");
            }
        }
        public void StartEnumeration(int N) => ParseNumber(Enumerable.Range(1, N).ToList());


        public bool ValidateInput(int N)
        {
            if (N < 1 || N > 1000)
            {
                return false;
            }
            else
            {
                return true;
            }
        }






        internal void ParseNumber(List<int> N)
        {
            foreach (var number in N)
            {
                if (!FindDivisibility(number).Equals(string.Empty))
                {
                    Console.WriteLine(FindDivisibility(number));
                }
                else
                {
                    Console.WriteLine(number);
                }
            }
        }

        internal string FindDivisibility(int N)
        {
            var pivotString = string.Empty;
            if (N % 2 == 0)
            {
                pivotString += "Cross";
            }

            if (N % 7 == 0)
            {
                pivotString += "Shield";
            }
            return pivotString;
        }
    }
}

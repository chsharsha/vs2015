using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace StreamReaderParser
{
    public static class ISOTimeParser
    {
        public static int GetTimeinSeconds(string text)
        {
            Regex pattern;
            
            if (text.Contains('H') && text.Contains('M') && text.Contains('S'))
            {
                pattern = new Regex(@"PT(?<noOfHours>\d+)H(?<noOfMinutes>\d+)M(?<noOfSeconds>\d+)S");
            }
            else if (text.Contains('H') && text.Contains('M'))
            {
                pattern = new Regex(@"PT(?<noOfHours>\d+)H(?<noOfMinutes>\d+)M");
            }
            else if (text.Contains('M') && text.Contains('S'))
            {
                pattern = new Regex(@"PT(?<noOfMinutes>\d+)M(?<noOfSeconds>\d+)S");

            }

            else if (text.Contains('H') && text.Contains('S'))
            {
                pattern = new Regex(@"PT(?<noOfHours>\d+)H(?<noOfSeconds>\d+)S");

            }

            else if (text.Contains('H') && !(text.Contains('M') || text.Contains('S')))
            {
                pattern = new Regex(@"PT(?<noOfHours>\d+)H");

            }
            else if (text.Contains('M') && !(text.Contains('H') || text.Contains('S')))
            {
                pattern = new Regex(@"PT(?<noOfMinutes>\d+)M");

            }
            else if (text.Contains('S') && !(text.Contains('H') || text.Contains('M')))
            {
                pattern = new Regex(@"PT(?<noOfSeconds>\d+)S");

            }
            else
            {
                pattern = new Regex(@"PT(?<noOfHours>\d+)H(?<noOfMinutes>\d+)M(?<noOfSeconds>\d+)S");
            }

            Match match = pattern.Match(text);
            ISOTime t = new ISOTime();
            if (!String.IsNullOrEmpty(match.Groups["noOfHours"].Value))
            {
                t.Hours = Int32.Parse(match.Groups["noOfHours"].Value);
            }
            if (!String.IsNullOrEmpty(match.Groups["noOfMinutes"].Value))
            {
                t.Minutes = Int32.Parse(match.Groups["noOfMinutes"].Value);
            }
            if (!String.IsNullOrEmpty(match.Groups["noOfSeconds"].Value))
            {
                t.Seconds = Int32.Parse(match.Groups["noOfSeconds"].Value);
            }

            int totalTime = 0;
            if(t.Hours!=0)
            {
                totalTime+= t.Hours * 60 * 60;
            }
            if(t.Minutes!=0)
            {
                totalTime+= t.Minutes * 60;
            }
            if (t.Seconds != 0)
            {
                totalTime += t.Seconds;
            }

            return (totalTime == 0) ? -100 : totalTime;

        }
    }

    public class ISOTime
    {
        public int Hours;
        public int Minutes;
        public int Seconds;
    }
}

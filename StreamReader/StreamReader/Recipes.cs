using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StreamReaderParser
{
    public class Recipes
    {
        public string ID { get; set; }
        public string Name { get; set; }

        public string Ingredients { get; set; }
        public string Creator { get; set;}

        public string RecipeCategory { get; set; }
        public string Url { get; set; }

        public string PrepTime { get; set; }

        public string CookTime { get; set; }

        public string TotalTime { get; set; }

        public string Source { get; set; }

        public string RecipeYield { get; set; }

        public string Description { get; set; }

    }

    public static class CSVConvert
    {
        public static string GetRandomRecord(Recipes r)
        {
            string sb = "";
            //ID,Name,Category,prepTime,cookTime,TotTime,Yields,Creator,Source,Ingredients,Description
            sb += r.ID + ",";
            sb += r.Name + ",";
            sb +=ISOTimeParser.GetTimeinSeconds(r.PrepTime).ToString() + ",";
            sb += ISOTimeParser.GetTimeinSeconds(r.CookTime).ToString() + ",";
            sb += ISOTimeParser.GetTimeinSeconds(r.TotalTime).ToString() + ",";
            sb += r.RecipeYield + ",";
            sb += r.Creator + ",";
            sb += r.Source + ",";

            //sb += r.Ingredients + ",";
            //sb += r.Description + ",";

            sb = sb.TrimEnd(',');
            sb = sb + System.Environment.NewLine;

            return sb.TrimEnd(',');

        }

        public static Recipes EscapeSequences(Recipes r, params string[] parm)
        {
            foreach(var a in parm.ToList())
            {
                r.Source = r.Source.Replace(a, string.Empty);
                r.Name = r.Name.Replace(a, string.Empty);
                r.Description = r.Description.Replace(a, string.Empty);
                r.Creator = r.Creator.Replace(a, string.Empty);
                r.Ingredients = r.Ingredients.Replace(a, string.Empty);
                r.RecipeCategory = r.RecipeCategory.Replace(a, string.Empty);
            }
            return r;
        }
    }
}

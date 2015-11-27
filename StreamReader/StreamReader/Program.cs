using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;
using System.Reflection;

namespace StreamReaderParser
{
    class Program
    {
        static void Main(string[] args)
        {
            string line;
            Recipes r;
            // Read the file and display it line by line.
            using (StreamReader file = new StreamReader(@"E:\Activation\jsonpig.txt"))
            {
                using (FileStream fs = File.Create(@"E:\Activation\jsoncsv.csv"))
                {
                    r = new Recipes();
                while ((line = file.ReadLine()) != null)
                {
                    line = line.Replace(@"$oid", "oid");

                    
                    dynamic stuff = JsonConvert.DeserializeObject(line);

                    r.ID = stuff._id.oid;
                    r.Name = (stuff.name == null) ? "Default" : stuff.name;
                    r.PrepTime = (stuff.prepTime == null) ? "PT0H0M0S" : stuff.prepTime;
                    r.CookTime = (stuff.cookTime == null) ? "PT0H0M0S" : stuff.cookTime;
                    r.TotalTime = (stuff.totalTime == null) ? "PT0H0M0S" : stuff.totalTime;
                    r.RecipeYield = (stuff.recipeYield == null) ? "-100" : stuff.recipeYield;
                    r.Description = (stuff.description == null) ? "Default" : stuff.description;
                    r.Source = (stuff.source == null) ? "Default" : stuff.source;
                    r.Url = (stuff.url == null) ? "Default" : stuff.url;
                    r.Creator = (stuff.creator == null) ? "Default" : stuff.creator;
                    r.RecipeCategory = (stuff.recipeCategory == null) ? "Default" : stuff.recipeCategory;
                    r.Ingredients = (stuff.ingredients == null) ? "Default" : stuff.ingredients;
                    CSVConvert.EscapeSequences(r, ",",@"'","-","(",",",".",";");
                   

                    // do your processing on each line here
                    
                        Byte[] info = new UTF8Encoding(true).GetBytes(CSVConvert.GetRandomRecord(r));

                        fs.Write(info, 0, info.Length);
                    }
                }
            }
        }
    }

    
}

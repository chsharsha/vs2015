using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using static ConsoleApplication1.Extension;

namespace ConsoleApplication1
{
   

        public class JsonGame : IIdentified
    {
            public ObjectId Id { get; set; }
            public string game_name { get; set; }
            public string Publisher { get; set; }
            public float year_played { get; set; }
            public string platform { get; set; }
            public List<string> comments { get; set; }
            public List<Favorite> favorites { get; set; }
            public List<string> Genre { get; set; }
        }

        public class Favorite
        {
            public string type { get; set; }
            public string Descriptor { get; set; }
        }

    
}

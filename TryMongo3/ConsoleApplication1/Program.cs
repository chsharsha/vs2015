using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Driver;
using ConsoleApplication1;

namespace ConsoleApplication1
{
    class Program
    {
        public static void Main(string[] args)
        {
            var client = new MongoClient();
            var db = client.GetDatabase("gamelibrary");
            var coll = db.GetCollection<JsonGame>("gamehistory");
            var id = new ObjectId("561858a195a4cf9d079911c8");
            var filter = Builders<JsonGame>.Filter.Eq("game_name", "Red Dead Redemption");
            var books = coll.Find(filter).ToListAsync().Result;
            var a = books.First();
            a.comments.Add("Wow man");
            a.comments.Add("Im trying to append here");
            coll.SaveAsync(a).Wait();
        }

      
    }
}

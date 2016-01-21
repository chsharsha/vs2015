using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoControlCenter;
using MongoDB.Driver;

namespace UnitTestProject
{
    [TestClass]
    public class UnitTest1
    {

        public UnitTest1()
        {
            JsonWriterSettings.Defaults.Indent = true;
        }







        [TestMethod]
        public void CheckInsertIntoDB()
        {
            Implementations imp = new Implementations();
            var prevTotCount = imp.TotalCount();
            
            var m = new Rental();
            //m.ID = ObjectId.GenerateNewId().ToString();
            m.NumberOfRooms = 5;
            m.Description = "very spacious. Off street parking";
            m.Price = 327;
            m.Address = new List<string>();
            m.Address.Add("Brooklyn Street");
            
            var l = imp.InsertRental(m).Result;

            var f = imp.FindRental(l);
            var finalTotCount = imp.TotalCount();
            //var filter = Builders<Rental>.Filter.Empty;

            //int u = findFluent.ToList().Where(x => x.Id.ToString().Equals(m.Id.ToString())).Count();
            Assert.AreEqual(f.Count, 1);
            Assert.AreEqual(prevTotCount, finalTotCount-1,"Something wrong with count");


        }

        [TestMethod]
        public void TestUploadFile()
        {
            Implementations imp = new Implementations();
            imp.UploadFile(@"F:\Delhi Tour\20131008_121058.jpg");
        }


        [TestMethod]
        public void TestPriceChecker()
        {
            Implementations imp = new Implementations();
            var Ret=imp.PriceCheck(300, 460);
            Ret.OrderByDescending(x => x.Price).ToList().ForEach(xb => Console.WriteLine(xb.Price));
            
            //Console.WriteLine(Ret.First(x => x.Price > 400).Price);
            //x.ForEach(xb => Console.WriteLine(xb.Id));
            //List<Rental> lstRental = new List<Rental>();
            
            //using (var enumerator = x.GetEnumerator())
            //{
                
            //    while (enumerator.MoveNext())
            //    {
            //        var current = enumerator.Current;
            //        Console.WriteLine(current.Id);
            //    }
            //}


        }


        [TestMethod]
        public void CheckDeleteIntoDB()
        {
            Implementations imp = new Implementations();
            var prevTotCount = imp.TotalCount();

            var m = new Rental();
            //m.ID = ObjectId.GenerateNewId().ToString();
            m.NumberOfRooms = 5;
            m.Description = "very spacious. Off street parking";
            m.Price = 327;
            m.Address = new List<string>();
            m.Address.Add("Brooklyn Street");

            var l = imp.InsertRental(m).Result;

            var f = imp.FindRental(l);
            var BeforeDeleteCount = imp.TotalCount();

            imp.RemoveRental(l).Wait();
            var finalCount = imp.TotalCount();
            //var filter = Builders<Rental>.Filter.Empty;

            //int u = findFluent.ToList().Where(x => x.Id.ToString().Equals(m.Id.ToString())).Count();
            Assert.AreEqual(f.Count, 1);
            Assert.AreEqual(prevTotCount, BeforeDeleteCount-1, "Something wrong with count");
            Assert.AreEqual(prevTotCount, finalCount, "May not have deleted successfully");


        }


        [TestMethod]
        public void CheckUpdateDB()
        {
            Implementations imp = new Implementations();
            

            var m = new Rental();
            //m.ID = ObjectId.GenerateNewId().ToString();
            m.NumberOfRooms = 5;
            m.Description = "very spacious. Off street parking";
            m.Price = 327;
            m.Address = new List<string>();
            m.Address.Add("Brooklyn Street");

            var l = imp.InsertRental(m).Result;

            var f = imp.FindRental(l);
            var target = f[0];
            target.Price = 450;
            imp.UpdateRental(target);

            var newRentalPrice = imp.FindRental(target.Id)[0].Price;
            Assert.AreEqual(newRentalPrice, 450);
            //var filter = Builders<Rental>.Filter.Empty;

            //int u = findFluent.ToList().Where(x => x.Id.ToString().Equals(m.Id.ToString())).Count();
            
        }
        [TestMethod]
        public void EmptyDocument()
        {
            var document = new BsonDocument();
            Console.WriteLine(document.ToJson());
        }



        [TestMethod]
        public void CheckUpdatePricing()
        {
            Implementations imp = new Implementations();


            var m = new Rental();
            //m.ID = ObjectId.GenerateNewId().ToString();
            m.NumberOfRooms = 5;
            m.Description = "very spacious. Off street parking";
            m.Price = 327;
            m.Address = new List<string>();
            m.Address.Add("Brooklyn Street");

            var l = imp.InsertRental(m).Result;

            var f = imp.FindRental(l)[0];
            AdjustPrice adj = new AdjustPrice();
            adj.NewPrice = f.Price + 120;
            adj.Reason = "Busy Season";
            f.AdjustPriceRental(adj);
            imp.UpdatePrice(f);
            Assert.AreEqual(m.Price + 120, imp.FindRental(f.Id)[0].Price);
            
            //var filter = Builders<Rental>.Filter.Empty;

            //int u = findFluent.ToList().Where(x => x.Id.ToString().Equals(m.Id.ToString())).Count();

        }


        [TestMethod]
        public void AddDocument()
        {
            var document = new BsonDocument {
                {"age",new BsonInt32(54) }
            };

            document.Add("firstName", new BsonString("Bobby"));
            Console.WriteLine(document.ToJson());
        }


        [TestMethod]
        public void AddingArrays()
        {
            var document = new BsonDocument();

            document.Add("Address", new BsonArray(new[] { "87 Merrimac St", "Buffalo", "NY" }));
            Console.WriteLine(document.ToJson());
        }


        [TestMethod]
        public void EmbeddedDocument()
        {
            var person = new BsonDocument();
            person.Add("firstName", "SriHarsha");
            
            var document = new BsonDocument();

            document.Add("Address", new BsonArray(new[] { "87 Merrimac St", "Buffalo", "NY" }));
            person.Add("communication",document);
            Console.WriteLine(person.ToJson());
        }



        [TestMethod]
        public void ToBson()
        {
            var person = new BsonDocument();
            person.Add("firstName", "SriHarsha");

            var document = new BsonDocument();

            document.Add("Address", new BsonArray(new[] { "87 Merrimac St", "Buffalo", "NY" }));
            person.Add("communication", document);
            var bsonDoc = person.ToBson();
            Console.WriteLine(BitConverter.ToString(bsonDoc));

            var deserializedDoc = BsonSerializer.Deserialize<BsonDocument>(bsonDoc);
            Console.WriteLine(deserializedDoc);
        }


        public class Person
        {
            public string Name { get; set; }
            public List<string> Address = new List<string>();
            public List<Skills> skillset = new List<Skills>();

            //[BsonIgnore]
            [BsonElement("Gender")]
            public string Sex { get; set; }
        }

        public class Skills
        {
            public string SkillName { get; set; }

            public string RelatedExperience { get; set; }
        }

        [TestMethod]
        public void FromObject()
        {
            Person p = new Person();
            p.Name = "SriHarsha";
            p.Address.Add("87 Merrimac");
            p.Address.Add("Buffalo");
            p.skillset.Add(new Skills { SkillName = ".Net", RelatedExperience = "4.5" });
            p.skillset.Add(new Skills { SkillName = "SQL Server", RelatedExperience = "5.5" });
            p.Sex = "Male";
            Console.WriteLine(p.ToJson());
        }

    }
}

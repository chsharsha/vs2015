using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

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
        public void EmptyDocument()
        {
            var document = new BsonDocument();
            Console.WriteLine(document.ToJson());
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

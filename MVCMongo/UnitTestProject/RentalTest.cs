using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MVCMongo.Models;
using MongoDB.Bson;

namespace UnitTestProject
{
    [TestClass]
    public class RentalTest
    {
        [TestMethod]
        public void CheckIfTypesMatching()
        {
            var m = new Rental();
            m.ID = ObjectId.GenerateNewId().ToString();
            m.Price = 35;
            var document = m.ToBsonDocument();
            Assert.AreEqual(document["Price"].BsonType, BsonType.Double,"Price types mismatch");
            Assert.AreEqual(document["ID"].BsonType, BsonType.ObjectId,"Object ID types mismatch");
        }
    }
}

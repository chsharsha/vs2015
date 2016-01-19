using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MongoControlCenter
{
    public class Implementations
    {
        public MongoContext Context = new MongoContext();
        public ObjectId InsertRental(Rental r)
        {
            Context.Rentals.InsertOne(r);
            return r.Id;
        }

        public List<Rental> FindRental(ObjectId id)
        {
            var l = Context.Rentals.Find(x => x.Id == id).ToList();
            return l;
        }
    }
}

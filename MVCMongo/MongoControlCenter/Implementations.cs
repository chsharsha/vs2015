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
        public async Task<ObjectId> InsertRental(Rental r)
        {
            await Context.Rentals.InsertOneAsync(r);
            return r.Id;
        }

        public async Task RemoveRental(ObjectId id)
        {
            await Context.Rentals.FindOneAndDeleteAsync(x => x.Id == id);
        }

        public IList<Rental> FindRental(ObjectId id)
        {
            var l = Context.Rentals.Find(x => x.Id == id).ToList();
            return l;
        }


        public IList<Rental> PriceCheck(decimal minPrice,decimal maxPrice)
        {
            var filterBuilder = Builders<Rental>.Filter.Gt(x => x.Price, minPrice)& Builders<Rental>.Filter.Lt(x => x.Price, maxPrice);

            return Context.Rentals.Find(filterBuilder).ToList();

        }
        public int TotalCount()
        {
            
            var filter = Builders<Rental>.Filter.Empty;
            var l = Context.Rentals.Find(filter).Count();
            return (Int32)l;
        }

        public void UpdateRental(Rental r)
        {
                       
            Context.Rentals.SaveAsync<Rental>(r).Wait();
            
            


        }


        public void UpdatePrice(Rental r)
        {
            
            Context.Rentals.SaveAsync<Rental>(r).Wait();
        }
    }
}

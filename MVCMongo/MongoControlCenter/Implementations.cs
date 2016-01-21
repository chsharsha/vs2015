using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.IO;
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


        public List<Rental> PriceCheck(decimal minPrice, decimal maxPrice)
        {
            //var filterBuilder = Builders<Rental>.Filter.Gt(x => x.Price, minPrice)& Builders<Rental>.Filter.Lt(x => x.Price, maxPrice);

            var whereFIlterBuilder = Builders<Rental>.Filter.Where(x => x.Price >= minPrice && x.Price <= maxPrice);
            return Context.Rentals.Find(whereFIlterBuilder).ToList<Rental>();


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


        public void UploadFile(string filename)
        {
            var bucket = new GridFSBucket(Context.Database);
            byte[] source= File.ReadAllBytes(filename);
            var id = bucket.UploadFromBytes("firstFile", source);

        }

        public void UpdatePrice(Rental r)
        {

            Context.Rentals.SaveAsync<Rental>(r).Wait();
        }


    }
}

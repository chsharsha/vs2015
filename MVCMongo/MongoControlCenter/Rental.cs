using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static MongoControlCenter.Extension;

namespace MongoControlCenter
{
    public class Rental : IIdentified
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
        public string Description { get; set; }
        public int NumberOfRooms { get; set; }
        public List<string> Address { get; set; }
        [BsonRepresentation(BsonType.Double)]
        public decimal Price { get; set; }

        public List<PriceAdjustments> PriceAdjustments = new List<PriceAdjustments>();
        public Rental()
        {

        }

        public void AdjustPriceRental(AdjustPrice adj)
        {
            var m = new PriceAdjustments(adj, Price);
            PriceAdjustments.Add(m);
            Price = adj.NewPrice;
        }
    }

    public class AdjustPrice
    {
        public decimal NewPrice { get; set; }
        public string Reason { get; set; }
    }

    public class PriceAdjustments
    {
        public decimal NewPrice { get; set; }

        public decimal OldPrice { get; set; }
        public string Reason { get; set; }

        public PriceAdjustments(AdjustPrice adjPrice, decimal OldPrice)
        {
            this.OldPrice = OldPrice;
            this.NewPrice = adjPrice.NewPrice;
            this.Reason = adjPrice.Reason;
        }

    }
}

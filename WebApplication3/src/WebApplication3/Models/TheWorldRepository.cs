using Microsoft.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.Models
{
    public class TheWorldRepository : ITheWorldRepository
    {
        private TheWorldContext _context;

        public TheWorldRepository(TheWorldContext context)
        {
            _context = context;
        }

        public IEnumerable<Trip> GetAllTrips()
        {
            return _context.Trips.OrderBy(x => x.Name).ToList();
        }

        public IEnumerable<Trip> GetAllTripsWithStops()
        {
            return _context.Trips.Include(x => x.Stops).OrderBy(x => x.Name).ToList();
        }
    }
}

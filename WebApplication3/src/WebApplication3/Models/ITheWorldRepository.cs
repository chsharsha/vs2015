using System.Collections.Generic;

namespace WebApplication3.Models
{
    public interface ITheWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        IEnumerable<Trip> GetAllTripsWithStops();
    }
}
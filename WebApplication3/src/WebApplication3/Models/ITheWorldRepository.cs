using System.Collections.Generic;

namespace WebApplication3.Models
{
    public interface ITheWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        IEnumerable<Trip> GetAllTripsWithStops();
        void AddTrip(Trip trip);
        bool SaveAll();
        Trip GetTripByName(string tripName,string UserName);
        void AddStop(string tripName,string userName, Stop stop);
        IEnumerable<Trip> GetUserTripsWithStops(string name);
        void RemoveStop(string tripName, string stopName, string userName);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OLAPDummyDataset
{

    public class Loc
    {
        public string City { get; set; }

        public string Zip { get; set; }

        public string State { get; set; }

    }
    public class StudentMain
    {
        public string StudentID { get; set; }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public string Gender { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zip { get; set; }

        public string Email { get; set; }

        public string PhoneNo { get; set; }

        public string PlacedYN { get; set; }

        public DateTime PlacementDate { get; set; }

        public DateTime GraduationDate { get; set; }

        public string EnrolledSEM { get; set; }

        public int YearEnrolled { get; set; }

        public int Salary { get; set; }

        public int PreWorkex { get; set; }
    }


    public static class ToolKit
    {

        public static DateTime RandomDay(Random gen, int yearEnrolled)
        {
            DateTime start = new DateTime(2015, 1, 1);
            DateTime end = new DateTime(2016, 12, 31);
            DateTime start16 = new DateTime(2016, 1, 1);
            if (yearEnrolled == 2015)
            {
                int range = (end - start16).Days;
                return start16.AddDays(gen.Next(range));
            }
            else
            {
                int range = (end - start).Days;
                return start.AddDays(gen.Next(range));
            }

        }


        public static string GiveRecord(StudentMain sm)
        {
            string sb = "";
            sb = sb + sm.StudentID + ",";
            sb = sb + sm.FirstName + ",";
            sb = sb + sm.LastName + ",";
            sb = sb + sm.Age.ToString() + ",";
            sb = sb + sm.Gender + ",";
            sb = sb + sm.City + ",";
            sb = sb + sm.State + ",";
            sb = sb + sm.Zip + ",";
            sb = sb + sm.Email + ",";
            sb = sb + sm.PhoneNo + ",";
            sb = sb + sm.PlacedYN + ",";
            if(sm.PlacementDate==DateTime.MinValue)
            {
                sb = sb + string.Empty + ",";
            }
            else
            {
                sb = sb + sm.PlacementDate.ToShortDateString() + ",";
            }
            sb = sb + sm.GraduationDate.ToShortDateString() + ",";
            
            sb = sb + sm.EnrolledSEM + ",";
            sb = sb + sm.YearEnrolled + ",";
            if (sm.Salary == 0)
            {
                sb = sb + string.Empty + ",";
            }
            else
            {
                sb = sb + sm.Salary.ToString() + ",";
            }
            sb = sb + sm.PreWorkex.ToString();

            sb = sb + System.Environment.NewLine;
            return sb;

        }
        public static string RandomString(int Size, Random r)
        {
            string input = "0123456789";
            var chars = Enumerable.Range(0, Size)
                                   .Select(x => input[r.Next(0, input.Length)]);
            return new string(chars.ToArray());
        }
        public static Loc[] LoadUpLocations()
        {
            List<Loc> locList = new List<Loc>();
            locList.Add(new Loc { City = "00501", Zip = "Holtsville", State = "NY" });
            locList.Add(new Loc { City = "00544", Zip = "Holtsville", State = "NY" });
            locList.Add(new Loc { City = "10001", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10001", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10002", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10003", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10004", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10005", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10006", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10007", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10008", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10009", Zip = "New York", State = "NY" });
            locList.Add(new Loc { City = "10301", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10302", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10303", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10304", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10305", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10306", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10307", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10308", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10309", Zip = "Staten Island", State = "NY" });
            locList.Add(new Loc { City = "10451", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10452", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10453", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10454", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10455", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10456", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10457", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10458", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "10459", Zip = "Bronx", State = "NY" });
            locList.Add(new Loc { City = "14214", Zip = "Buffalo", State = "NY" });
            locList.Add(new Loc { City = "14260", Zip = "Buffalo", State = "NY" });
            return locList.ToArray();
        }
    }
}

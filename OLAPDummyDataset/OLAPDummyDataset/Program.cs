using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace OLAPDummyDataset
{

    public class Name
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }

   
    class Program
    {
        static void Main(string[] args)
        {
            var locs = ToolKit.LoadUpLocations();
            Random R=new Random();
            List<string> allFirstNames = new List<string>();
            List<string> allLastNames = new List<string>();
            Regex rgx = new Regex("[^a-zA-Z0-9 -]");
            string[] GenderArray = new string[] { "M", "F","M","F" };
            string[] Placedornot = new string[] { "Y", "N","Y","N" };
            string[] emailDomainArray = new string[] {"@buffalo.edu","@gmail.com","@yahoo.com","@hotmail.com" };
            string[] semEnrollmentArray = new string[] { "Fall","Spring","Summer"};
            using (StreamReader reader = new StreamReader(@"E:\Data\uniwuenames.txt"))
            {
                string line;
                
                while ((line = reader.ReadLine()) != null)
                {
                    
                    line = rgx.Replace(line, "");
                    line = line.Trim();
                    if(!String.IsNullOrEmpty(line))
                    {
                        allFirstNames.Add(line);
                    }
                }

                
            }

            using (StreamReader reader = new StreamReader(@"E:\Data\lastnames.txt"))
            {
                string line;

                while ((line = reader.ReadLine()) != null)
                {

                    line = rgx.Replace(line, "");
                    line = line.Trim();
                    if (!String.IsNullOrEmpty(line))
                    {
                        allLastNames.Add(line);
                    }
                }


            }


            var query = from x in allFirstNames
                        from y in allLastNames
                        select new { x, y };
            List<Name> namesList = new List<Name>();
            query.ToList().ForEach(l => namesList.Add(new Name { FirstName = l.x, LastName = l.y }));
            StudentMain sm;
            var filename = @"E:\Data\DummyFileOLAP" + new Random().Next(0, 450) + ".csv";
            using (FileStream fs = File.Create(filename))
            {
                var header= "StudentID,First_Name,Last_Name,Age,Gender,City,State,Zip,Email,Phone_Number,PlacedYN,Date_Of_Placement,Date_Of_Graduation,Sem_Of_Enrollment,Year_Enrolled,Salary,Pre_Work_Ex";
                header = header + System.Environment.NewLine;
                Byte[] info = new UTF8Encoding(true).GetBytes(header);

                fs.Write(info, 0, info.Length);
                foreach (var name in namesList)
                {


                    sm = new StudentMain();
                    sm.StudentID= ToolKit.RandomString(12, R);
                    sm.FirstName = name.FirstName;
                    sm.LastName = name.LastName;
                    sm.Age = R.Next(18, 46);
                    sm.Gender = GenderArray[R.Next(0, GenderArray.Length)];
                    Loc l = new Loc();
                    l = locs[R.Next(0, locs.Length)];
                    sm.City = l.City;
                    sm.State = l.State;
                    sm.Zip = l.Zip;
                    sm.Email = sm.FirstName + "." + sm.LastName + emailDomainArray[R.Next(0, emailDomainArray.Length)];
                    sm.PhoneNo = ToolKit.RandomString(10, R);
                    sm.PlacedYN = Placedornot[R.Next(0,Placedornot.Length)];
                    sm.YearEnrolled = R.Next(2014, 2016);
                    sm.PlacementDate = (sm.PlacedYN == "N") ? DateTime.MinValue : ToolKit.RandomDay(R, sm.YearEnrolled);
                    sm.GraduationDate = ToolKit.RandomDay(R, sm.YearEnrolled);
                    sm.EnrolledSEM = semEnrollmentArray[R.Next(0, semEnrollmentArray.Length)];
                    sm.Salary =(sm.PlacedYN=="N")?0: R.Next(70000, 130001);
                    sm.PreWorkex = R.Next(0, 11);
                    info = new UTF8Encoding(true).GetBytes(ToolKit.GiveRecord(sm));

                    fs.Write(info, 0, info.Length);
                }

                var m = new CleanseExistingData().CleanseAndGenerate();
                foreach(var item in m)
                {
                    info = new UTF8Encoding(true).GetBytes(ToolKit.GiveRecord(item));

                    fs.Write(info, 0, info.Length);
                }
            }
           
        }
    }
}

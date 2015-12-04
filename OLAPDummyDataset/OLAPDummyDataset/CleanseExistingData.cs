using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace OLAPDummyDataset
{
    public class CleanseExistingData
    {
        public List<StudentMain> CleanseAndGenerate()
        {
            List<StudentMain> lstSM = new List<StudentMain>();
            var locs = ToolKit.LoadUpLocations();
            Random R = new Random();
            
            Regex rgx = new Regex("[^a-zA-Z0-9 -]");
            
            string[] Placedornot = new string[] { "Y", "N" };
            string[] emailDomainArray = new string[] { "@buffalo.edu", "@gmail.com", "@yahoo.com", "@hotmail.com" };
            string[] semEnrollmentArray = new string[] { "Fall", "Spring", "Summer" };
            StudentMain sm;
            using (StreamReader sr = new StreamReader(@"E:\Data\STUDENTS.csv"))
            {
                string line;
                sr.ReadLine();
                while ((line = sr.ReadLine()) != null)
                {
                    sm = new StudentMain();
                    var lineArray = line.Split(',');
                    sm.StudentID = lineArray[0].Trim();
                    sm.FirstName = lineArray[1].Trim();
                    sm.LastName = lineArray[2].Trim();
                    sm.Age = Int32.Parse(lineArray[3].Trim());
                    sm.Gender = lineArray[4].Trim();

                    Loc l = new Loc();
                    l = locs[R.Next(0, locs.Length)];
                    sm.City = l.City;
                    sm.State = l.State;
                    sm.Zip = l.Zip;
                    sm.Email = sm.FirstName + "." + sm.LastName + emailDomainArray[R.Next(0, emailDomainArray.Length)];
                    sm.PhoneNo = ToolKit.RandomString(10, R);
                    sm.PlacedYN = Placedornot[R.Next(0, Placedornot.Length)];
                    sm.YearEnrolled = R.Next(2014, 2016);
                    sm.PlacementDate = (sm.PlacedYN == "N") ? DateTime.MinValue : ToolKit.RandomDay(R, sm.YearEnrolled);
                    sm.GraduationDate = ToolKit.RandomDay(R, sm.YearEnrolled);
                    sm.EnrolledSEM = semEnrollmentArray[R.Next(0, semEnrollmentArray.Length)];
                    sm.Salary = (sm.PlacedYN == "N") ? 0 : R.Next(70000, 130001);
                    sm.PreWorkex = R.Next(0, 11);
                    lstSM.Add(sm);
                }

            }
            return lstSM;
            



        }
    }


}

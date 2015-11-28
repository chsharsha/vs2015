using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.DataAccess
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new InfoSecSurveyEntities())
            {

                //var result = db.Database
                // .SqlQuery<Org>("ListAllOrganizations @ClientId", -1)
                // .ToList();
            }
        }
    }

    public class Org
    {
        public int OrganizationId { get; set; }

        public string Organization_Name { get; set; }
    }
}

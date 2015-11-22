using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.Entities
{
    public class Organization
    {
        public string OrganizationID { get; set; }
        public string OrganizationName { get; set; }
        public string City { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string AuditingOrg { get; set; }

    }
}

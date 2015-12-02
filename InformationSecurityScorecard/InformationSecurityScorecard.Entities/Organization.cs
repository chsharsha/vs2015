using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InformationSecurityScorecard.Entities
{
    public class Organization
    {
        public int OrganizationID { get; set; }
        public string OrganizationName { get; set; }
        public string City { get; set; }

        public string State { get; set; }

        public string Country { get; set; }

        public string AuditingOrg { get; set; }

        public List<QuestionSection> qs { get; set; }
        

    }


    public class Question
    {
        public int QuestionID { get; set; }

        public string QuestionDescription { get; set; }

        
        public int TotalResponses { get; set; }

        public int YesCount { get; set; }

        public int NoCount { get; set; }

        public float YesPercentage { get; set; }

        public float NoPercentage { get; set; }


    }




    public class QuestionSection
    {
        public int QuestionSectionID { get; set; }

        public string QuestionSecDescription { get; set; }

        public List<Question> QsnList { get; set; }

        public float sectionLevelYes { get; set; }

        public float sectionLevelNo { get; set; }
    }
}

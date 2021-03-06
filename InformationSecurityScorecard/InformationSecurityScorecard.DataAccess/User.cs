//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace InformationSecurityScorecard.DataAccess
{
    using System;
    using System.Collections.Generic;
    
    public partial class User
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public User()
        {
            this.Surveys = new HashSet<Survey>();
        }
    
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string User_EmailId { get; set; }
        public Nullable<System.DateTime> Date_Modified { get; set; }
        public string Date_Modified_By { get; set; }
        public Nullable<System.DateTime> Date_Created { get; set; }
        public string Date_Created_By { get; set; }
        public int RoleID { get; set; }
        public int OrganizationId { get; set; }
        public Nullable<int> DepartmentID { get; set; }
        public Nullable<int> Months_of_Experience { get; set; }
    
        public virtual Organization Organization { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Survey> Surveys { get; set; }
        public virtual UserRole UserRole { get; set; }
        public virtual Department_of_Work Department_of_Work { get; set; }
    }
}

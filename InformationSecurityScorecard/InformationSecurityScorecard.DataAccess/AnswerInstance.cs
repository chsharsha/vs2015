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
    
    public partial class AnswerInstance
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AnswerInstance()
        {
            this.Comments = new HashSet<Comment>();
        }
    
        public int Answer_InstanceId { get; set; }
        public int Questionnaire_InstanceId { get; set; }
        public int AnswerId { get; set; }
    
        public virtual Questionnaire_Instance Questionnaire_Instance { get; set; }
        public virtual Answer Answer { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Comment> Comments { get; set; }
    }
}

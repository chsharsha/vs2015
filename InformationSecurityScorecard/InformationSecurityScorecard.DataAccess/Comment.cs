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
    
    public partial class Comment
    {
        public int CommentId { get; set; }
        public string Comments { get; set; }
        public int Answer_InstanceId { get; set; }
    
        public virtual AnswerInstance AnswerInstance { get; set; }
    }
}
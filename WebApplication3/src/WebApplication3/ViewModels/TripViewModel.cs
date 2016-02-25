using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication3.ViewModels
{
    public class TripViewModel
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255,MinimumLength =4)]
        public string Name { get; set; }

        public DateTime Created { get; set; } = DateTime.UtcNow;
    }
}

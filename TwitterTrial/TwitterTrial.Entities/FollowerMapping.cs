using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TwitterTrial.Entities
{
    public class FollowerMapping
    {
        public int FollowerMappingID { get; set; }
        public string Source { get; set; }
        public string Destination { get; set; }
    }
}

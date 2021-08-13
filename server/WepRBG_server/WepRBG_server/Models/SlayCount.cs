using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class SlayCount
    {
        public int CreatureId { get; set; }
        public String CreatureName { get; set; }
        public int Count { get; set;}

        public SlayCount(Creature c)
        {
            CreatureId = c.Id;
            CreatureName = c.Name;
            Count = c.Count;
        }


    }
}

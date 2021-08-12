using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class SlayCount
    {
        public Creature Creature { get; set; }
        public int Count { get; set;}

        public SlayCount(Creature creature, int count)
        {
            this.Creature = creature;
            this.Count = count;
        }
    }
}

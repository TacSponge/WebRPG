using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class CreatureCombatStats
    {
        public String Name { get; set; }
        public int HP { get; set; }
        public int CreatureId { get; set; }
        
        public CreatureCombatStats(String name, int HP)
        {
            Name = name;
            this.HP = HP;
        }
    }
}

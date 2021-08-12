using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class Creature
    {
        public String Name { get; protected set; }
        public int HP { get; protected set; }
        
        public Creature(String name, int HP)
        {
            Name = name;
            this.HP = HP;
        }
    }
}

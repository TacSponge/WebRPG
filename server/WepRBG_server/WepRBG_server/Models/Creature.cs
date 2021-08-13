using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class Creature
    {
        public int Id { get; private set; }
        public String Name { get; private set; }
        public int HP { get; private set; }
        public int Count { get; set; }

        public Creature(int id, String name, int hp, int slayCount)
        {
            Id = id;
            Name = name;
            HP = hp;
            Count = slayCount;
        }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WepRBG_server.Models
{
    public class InventoryItem
    {
        public int Id { get; }
        public string Name { get; }
        public int Damage { get; }

        public InventoryItem(int id, string name, int damage)
        {
            Id = id;
            Name = name;
            Damage = damage;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepRBG_server.Models;

namespace WepRBG_server.Data
{
    public static class CreatureService 
    { 
        internal static List< Creature> Creatures { get; private set; }

        static CreatureService()
        {
            Creatures = new List<Creature>(){        
                    new Creature(0,"Moblin", 12,0)
                    , new Creature(1,"Goblin", 10,0)
                    , new Creature(2,"Kobold", 15,0)
                    , new Creature(3,"Dragon",45,0)
                };
        }
        internal static IEnumerable<Creature> GetAllCreatures()
        {
            return Creatures;
        }

        internal static IEnumerable<SlayCount> GetAllCounts()
        {
            return Creatures.Select(c => new SlayCount(c));
        }

        internal static void UpdateSlayCount(int id, int updatedCount)
        {
            int index = Creatures.FindIndex(c => c.Id == id);
            if (index != -1)
            {
                Creatures[index].Count = updatedCount;
            }
        }

        internal static void DeleteCreature(int id)
        {
            Creatures = Creatures.Where(c => c.Id != id).ToList();
        }
    }
}

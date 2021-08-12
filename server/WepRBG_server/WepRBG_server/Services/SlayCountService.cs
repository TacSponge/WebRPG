using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepRBG_server.Models;

namespace WepRBG_server.Data
{
    public static class SlayCountService 
    { 
        static List<SlayCount> Counts { get; }

        static SlayCountService()
        {
            Counts = new List<SlayCount>();
        }

        public static List<SlayCount> GetAll() => Counts;

        public static void Add(SlayCount count)
        {
            count.Id = Counts.Count + 1;
            Counts.Add(count);
        }


    }
}

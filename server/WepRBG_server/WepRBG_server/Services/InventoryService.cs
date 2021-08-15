using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Permissions;
using System.Threading.Tasks;
using WepRBG_server.Models;

namespace WepRBG_server.Services
{
    public static class InventoryService
    {
        public static List<InventoryItem> InventoryItems { get; set; } =
            new List<InventoryItem>() {new InventoryItem(0, "axe", 3), new InventoryItem(1, "sword", 4) };
        public static IEnumerable<InventoryItem> GetAllItems()
        {
            return InventoryItems;
        }

        public static void DeleteItem(int id)
        {
            int index = InventoryItems.FindIndex(i => i.Id == id);
            if (index != -1)
            {
                InventoryItems.RemoveAt(index);
            }
        }
    }
}

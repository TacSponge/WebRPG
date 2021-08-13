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
        public static IEnumerable<InventoryItem> InventoryItems { get; set; } =
            new List<InventoryItem>() {new InventoryItem(0, "axe", 3)};
        public static IEnumerable<InventoryItem> GetAllItems()
        {
            return InventoryItems;
        }
    }
}

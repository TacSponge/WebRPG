using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepRBG_server.Models;
using WepRBG_server.Services;

namespace WepRBG_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<InventoryItem> getAll()
        {
            return InventoryService.GetAllItems();
        }

        [HttpDelete("{id}")]
        public void DeleteById(int id)
        {
            InventoryService.DeleteItem(id);
        }
    }
}

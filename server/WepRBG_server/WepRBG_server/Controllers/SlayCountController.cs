using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WepRBG_server.Data;
using WepRBG_server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WepRBG_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlayCountController : ControllerBase
    {
        // GET: api/<SlayCountController>
        [HttpGet]
        public IEnumerable<SlayCount> Get()
        {
            return CreatureService.GetAllCounts();
        }

        // PUT api/<SlayCountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] int updatedCount)
        {
            CreatureService.UpdateSlayCount(id, updatedCount);
        }
    }
}

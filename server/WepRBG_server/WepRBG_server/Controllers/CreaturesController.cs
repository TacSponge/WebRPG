using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc.Core.Infrastructure;
using WepRBG_server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WepRBG_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreaturesController : ControllerBase
    {
        Creature[] creatures =
        {
            new Creature("Moblin", 12)
            //, new Creature("Goblin", 10)
           // , new Creature("Kobold", 15)
           // , new Creature("Dragon",45)
        };

        // GET: <ValuesController>
        [HttpGet]
        public Creature GetRandomCreature()
        {
            Random random = new Random();

            int index = random.Next(creatures.Length);

            return creatures[index];
        }
    }
}

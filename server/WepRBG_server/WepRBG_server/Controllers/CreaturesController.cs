using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc.Core.Infrastructure;
using WepRBG_server.Data;
using WepRBG_server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WepRBG_server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreaturesController : ControllerBase
    {
        // GET: <ValuesController>
        [HttpGet]
        [Route("/random")]
        public Creature GetRandomCreature()
        {
            Random random = new Random();
            List<Creature> creatures = CreatureService.GetAllCreatures().ToList();

            int index = random.Next(creatures.Count);

            return creatures[index];
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
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
        public Creature Get()
        {          
            return new Creature("Moblin", 12);
        }
    }
}

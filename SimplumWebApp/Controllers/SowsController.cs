using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SimplumWebApp.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SowsController : ControllerBase
  {
    private static IList<Sow> _sows;

    private static IList<Sow> Sows
    {
      get
      {
        if (_sows == null)
        {
          _sows = new List<Sow>() {
            new Sow(){ ID = 1, Name = "11111", Elir = "#####1", BirthDate = new DateTime(2018,7,7), Status = SowStatus.Normal },
            new Sow(){ ID = 2, Name = "22222", Elir = "#####2", BirthDate = new DateTime(2018,1,7), Status = SowStatus.Lactating },
            new Sow(){ ID = 3, Name = "33333", Elir = "#####3", BirthDate = new DateTime(2018,7,7), Status = SowStatus.Pregnant },
            new Sow(){ ID = 4, Name = "44444", Elir = "#####4", BirthDate = new DateTime(2018,7,2), Status = SowStatus.Inseminated },
            new Sow(){ ID = 5, Name = "55555", Elir = "#####5", BirthDate = new DateTime(2013,7,7), Status = SowStatus.Inseminated },
            new Sow(){ ID = 6, Name = "66666", Elir = "#####6", BirthDate = new DateTime(2017,7,7), Status = SowStatus.Normal }
          };
        }
        return _sows;
      }
    }  

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Sow>> Get()
        {
            return Sows.ToArray();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Sow> Get(int id)
        {
          var sow = Sows.Where(x => x.ID == id).SingleOrDefault();
            if (sow != null)
            {
        return null;
            }
            else
            {
              return sow;
            }
        }

        // POST api/values
        [HttpPost]
        public void Post(Sow sow)
        {            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, Sow sow)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

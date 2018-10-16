using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimplumWebApp.Controllers
{
  public class Sow
  {
    public int ID { get; set; }
    public string Elir { get; set; }
    public string Name { get; set; }
    public DateTime BirthDate { get; set; }
    public SowStatus Status { get; set; }
  }

  public enum SowStatus
  {
    Normal = 0,
    Inseminated = 1,
    Pregnant = 2,
    Lactating = 3,
  }
}


using Microsoft.AspNetCore.Mvc;

namespace ValueFolks.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        [HttpGet("testfunction")]
        public ActionResult Testfunction()
        {
            return Ok("Its Working");
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace TheStarWarsProject.Controllers
{
    public class HomeController : Controller
    { 
        public ActionResult Index()
        {
            return View();
        }
    }
}

using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using TheStarWarsProject.Models;

namespace TheStarWarsProject.Controllers
{
    public class CharactersController : Controller
    { 
        // GET: /Home/
        public ActionResult Index()
        {
            List<Character> characters = GetCharacters("./App_Data/Characters.json");

            return View(characters);
        }

        private List<Character> GetCharacters(string file) 
        {
            List<Character> data;

            using (var reader = new StreamReader(file)) 
            {
                var json = reader.ReadToEnd();
                data = JsonConvert.DeserializeObject<List<Character>>(json);
            }

            return data;
        } 
    }
}

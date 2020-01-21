using AngularApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Controllers
{
    public class CartController : Controller
    {
        ApplicationContext db;
        public CartController(ApplicationContext context)
        {
            db = context;           
        }
        [HttpGet]
        public IEnumerable<CartLine> Get()
        {
            return db.CartLines.ToList();
        }

        [HttpGet("{id}")]
        public CartLine Get(int id)
        {
            CartLine cartLine = db.CartLines.FirstOrDefault(x => x.Id == id);
            return cartLine;
        }

        [HttpPost]
        public IActionResult Post([FromBody]CartLine cartLine)
        {
            if (ModelState.IsValid)
            {
                db.CartLines.Add(cartLine);
                db.SaveChanges();
                return Ok(cartLine);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]CartLine cartLine)
        {
            if (ModelState.IsValid)
            {
                db.Update(cartLine);
                db.SaveChanges();
                return Ok(cartLine);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            CartLine cartLine = db.CartLines.FirstOrDefault(x => x.Id == id);
            if (cartLine != null)
            {
                db.CartLines.Remove(cartLine);
                db.SaveChanges();
            }
            return Ok(cartLine);
        }
    }
}

using AngularApp.Models;
using AngularApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Controllers
{
    [Route("api/cart")]
    public class CartController : Controller
    {
        private ApplicationContext db;
        private UserService _userServ;
        public CartController(ApplicationContext context, UserService userServ)
        {
            db = context;
            _userServ = userServ;
        }

        [HttpGet]
        public IEnumerable<CartLine> Get()
        {
            return db.CartLines.Include(c => c.Product).ToList();
        }

        [HttpGet("{id}")]
        public CartLine Get(int id)
        {
            CartLine cartLine = db.CartLines.FirstOrDefault(x => x.Id == id);
            return cartLine;
        }

        [HttpPost]
        [Route("{id}")]
        public IActionResult Post(int id)
        {
            var product = db.Products.FirstOrDefault(p => p.Id == id);
            if (product == null)
                return NotFound("Item is not found.");

            var user = _userServ.GetUser();
            if (user == null)
                return BadRequest("User is not authentificated.");           

            var cartLine = db.CartLines.FirstOrDefault(c => c.UserId == user.Id && c.ProductId == product.Id);
            if (cartLine == null)
            {
                CartLine newItem = new CartLine
                {
                    Quantity = 1,
                    ProductId = product.Id,
                    Price = product.Price,
                    UserId = user.Id
                };

                db.CartLines.Add(newItem);
                db.SaveChanges();
                return Ok(newItem);
            }
            else
            {
                cartLine.Quantity += 1;
                db.Update(cartLine);
                db.SaveChanges();
                return Ok(cartLine);
            }                     
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

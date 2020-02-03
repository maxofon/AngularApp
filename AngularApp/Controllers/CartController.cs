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
        public async Task<ActionResult<IEnumerable<CartLine>>> Get()
        {
            try
            {
                var user = _userServ.GetUser();
                if (user == null)
                    return BadRequest("User is not authentificated.");

                return await db.CartLines.Where(c => c.UserId == user.Id).Include(c => c.Product).ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpGet]
        [Route("getTotal")]
        public async Task<ActionResult<decimal>> GetTotal()
        {
            try
            {
                var user = _userServ.GetUser();
                if (user == null)
                    return BadRequest("User is not authentificated.");

                var entities = await db.CartLines.Where(c => c.UserId == user.Id).ToListAsync();

                return entities.Sum(c => c.Price * c.Quantity);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CartLine>> Get(int id)
        {
            try
            {
                return await db.CartLines.FirstOrDefaultAsync(x => x.Id == id);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpPost]
        [Route("{id}")]
        public async Task<IActionResult> Post(int id)
        {
            try
            {
                var product = await db.Products.FirstOrDefaultAsync(p => p.Id == id);
                if (product == null)
                    return NotFound("Item is not found.");

                var user = _userServ.GetUser();
                if (user == null)
                    return BadRequest("User is not authentificated.");

                var cartLine = await db.CartLines.FirstOrDefaultAsync(c => c.UserId == user.Id && c.ProductId == product.Id);
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
                    await db.SaveChangesAsync();
                    return Ok(newItem);
                }
                else
                {
                    cartLine.Quantity += 1;
                    db.Update(cartLine);
                    await db.SaveChangesAsync();
                    return Ok(cartLine);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }                       
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]CartLine cartLine)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    db.Update(cartLine);
                    await db.SaveChangesAsync();
                    return Ok(cartLine);
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
            
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                CartLine cartLine = db.CartLines.Include(c => c.Product).FirstOrDefault(x => x.Id == id);
                if (cartLine != null)
                {
                    db.CartLines.Remove(cartLine);
                    await db.SaveChangesAsync();
                }
                return Ok(cartLine);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
           
        }
    }
}

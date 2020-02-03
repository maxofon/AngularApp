using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using AngularApp.Services;
using Microsoft.EntityFrameworkCore;

namespace AngularApp.Controllers
{
    [Route("api/orders")]
    public class OrderController : Controller
    {
        private ApplicationContext db;
        private UserService _userServ;
        public OrderController(ApplicationContext context, UserService userServ)
        {
            db = context;
            _userServ = userServ;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Order>>> Get()
        {
            try
            {
                return await db.Orders.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Order order)
        {
            try
            {
                User user = _userServ.GetUser();
                if (user == null)
                    return BadRequest("User is not authentificated.");

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                List<CartLine> cartLines = await db.CartLines.Where(c => c.UserId == user.Id).ToListAsync();
                if (cartLines.Count == 0)
                    return BadRequest("Cart is empty.");

                order.OrderTime = DateTime.Now;
                order.Amount = cartLines.Sum(c => c.Price * c.Quantity);
                db.Orders.Add(order);
                db.SaveChanges();



                foreach (var item in cartLines)
                {
                    var orderLine = new OrderLine
                    {
                        Quantity = item.Quantity,
                        Price = item.Price,
                        ProductId = item.ProductId,
                        OrderId = order.Id
                    };

                    db.OrderLines.Add(orderLine);
                    db.CartLines.Remove(item);
                    await db.SaveChangesAsync();
                }

                return Ok(order);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }
    }
}

using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using AngularApp.Services;

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
        public IEnumerable<Order> Get()
        {
            return db.Orders.ToList();
        }

        [HttpPost]
        public IActionResult Post([FromBody]Order order)
        {
            User user = _userServ.GetUser();
            if (user == null)
            {
                return BadRequest("User is not authentificated.");
            }

            if (!ModelState.IsValid)
            {                
                return BadRequest(ModelState);
            }

            db.Orders.Add(order);
            db.SaveChanges();
            
            List<CartLine> cartLines = db.CartLines.Where(c => c.UserId == user.Id).ToList();
            if (cartLines.Count == 0)
                return BadRequest("Cart is empty.");

            foreach(var item in cartLines)
            {
                var orderLine = new OrderLine
                {
                    Quantity = item.Quantity,
                    Price = item.Price,
                    ProductId = item.ProductId,
                    OrderId = order.Id
                };

                db.OrderLines.Add(orderLine);
                db.SaveChanges();
            }
            
            return Ok(order);
        }
    }
}

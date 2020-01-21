using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp.Controllers
{
    public class OrderController : Controller
    {
        ApplicationContext db;
        public OrderController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<OrderLine> Get()
        {
            return db.OrderLines.ToList();
        }

        [HttpGet("{id}")]
        public OrderLine Get(int id)
        {
            OrderLine orderLine = db.OrderLines.FirstOrDefault(x => x.Id == id);
            return orderLine;
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderLine orderLine)
        {
            if (ModelState.IsValid)
            {
                db.OrderLines.Add(orderLine);
                db.SaveChanges();
                return Ok(orderLine);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]OrderLine orderLine)
        {
            if (ModelState.IsValid)
            {
                db.Update(orderLine);
                db.SaveChanges();
                return Ok(orderLine);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            OrderLine orderLine = db.OrderLines.FirstOrDefault(x => x.Id == id);
            if (orderLine != null)
            {
                db.OrderLines.Remove(orderLine);
                db.SaveChanges();
            }
            return Ok(orderLine);
        }
    }
}

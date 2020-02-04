using AngularApp.Services;
using AutoMapper;
using BusinessLogic.Interfaces;
using BusinessLogic.Interfaces.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API = AngularApp.Models;
using BL = BusinessLogic.ModelsDTO;

namespace AngularApp.Controllers
{
    [Route("api/orders")]
    public class OrderController : Controller
    {
        private IUserService _userServ;
        private readonly IRepository<BL.OrderLine> _orderLineRepo;
        private readonly IRepository<BL.CartLine> _cartLineRepo;
        private readonly IRepository<BL.Order> _orderRepo;
        private readonly IMapper _mapper;

        public OrderController(IRepository<BL.OrderLine> orderLineRepo,
                            IRepository<BL.Order> orderRepo,
                            IRepository<BL.CartLine> cartLineRepo,
                            IUserService userServ,
                            IMapper mapper)
        {
            _orderLineRepo = orderLineRepo;
            _cartLineRepo = cartLineRepo;
            _orderRepo = orderRepo;
            _userServ = userServ;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.Order>>> Get()
        {
            try
            {
                //return await db.Orders.ToListAsync();
                var entities = await _orderLineRepo.GetAsync();

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.Order>(item);
                    return mapEntity;
                }).ToList();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]API.Order order)
        {
            try
            {
                var user = _userServ.GetUser();
                if (user == null)
                    return Unauthorized("User is not authentificated.");

                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                var cartLines = await _cartLineRepo.FindByAsync(c => c.UserId == user.Id);
                if (cartLines.Count == 0)
                    return BadRequest("Cart is empty.");

                order.OrderTime = DateTime.Now;
                order.Amount = cartLines.Sum(c => c.Price * c.Quantity);

                //db.Orders.Add(order);
                //db.SaveChanges();
                await _orderRepo.SaveAsync(_mapper.Map<BL.Order>(order));

                foreach (var item in cartLines)
                {
                    var orderLine = new BL.OrderLine
                    {
                        Quantity = item.Quantity,
                        Price = item.Price,
                        ProductId = item.ProductId,
                        OrderId = order.Id
                    };

                    //db.OrderLines.Add(orderLine);
                    //db.CartLines.Remove(item);
                    //await db.SaveChangesAsync();
                    await _orderLineRepo.SaveAsync(orderLine);
                    await _cartLineRepo.DeleteAsync(item.Id);
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

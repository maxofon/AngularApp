﻿using AutoMapper;
using BusinessLogic.Interfaces;
using BusinessLogic.Interfaces.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API = AngularApp.Models;
using BL = BusinessLogic.ModelsDTO;

namespace AngularApp.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : Controller
    {
        private IUserService _userServ;
        private readonly IOrderLineRepository _orderLineRepo;
        private readonly ICartLineRepository _cartLineRepo;
        private readonly IOrderRepository _orderRepo;
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public OrderController(IOrderLineRepository orderLineRepo,
                            IOrderRepository orderRepo,
                            ICartLineRepository cartLineRepo,
                            IUserRepository userRepo,
                            IUserService userServ,
                            IMapper mapper)
        {
            _orderLineRepo = orderLineRepo;
            _cartLineRepo = cartLineRepo;
            _orderRepo = orderRepo;
            _userRepo = userRepo;
            _userServ = userServ;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.Order>>> Get()
        {
            try
            {
                var entities = await _orderRepo.GetAsync();

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

        [HttpGet("{name}")]
        public async Task<ActionResult<IEnumerable<API.Order>>> GetByName(string name)
        {
            try
            {
                var userList = await _userRepo.FindByAsync(u => u.Name == name);
                var user = userList.FirstOrDefault();
                var entities = await _orderRepo.FindByAsync(o => o.UserId == user.Id);

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
        [Authorize]
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
                //if (cartLines.Count == 0)
                //    return BadRequest("Cart is empty.");

                order.OrderTime = DateTime.Now;
                order.UserId = user.Id;
                order.Amount = cartLines.Sum(c => c.Price * c.Quantity);

                //маппировка, сохранение, получение ID новой записи 
                var newOrderId = await _orderRepo.SaveAsync(_mapper.Map<BL.Order>(order));

                foreach (var item in cartLines)
                {
                    var orderLine = new BL.OrderLine
                    {
                        Quantity = item.Quantity,
                        Price = item.Price,
                        ProductId = item.ProductId,
                        OrderId = newOrderId
                    };

                    await _orderLineRepo.SaveAsync(orderLine);  //сохранение новой записи строки заказа
                    await _cartLineRepo.DeleteAsync(item.Id);   //удаление строки корзины на основании которой создана строка заказа
                }

                return Ok(order);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]API.Order order)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _orderRepo.SaveAsync(_mapper.Map<BL.Order>(order));
                    return Ok(await _orderRepo.GetByIdAsync(newItemId));
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
                var order = await _orderRepo.GetByIdAsync(id);
                if (order != null)
                {
                    await _orderRepo.DeleteAsync(id);
                    return Ok(order);
                }

                return BadRequest("Order not found.");
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }
    }
}

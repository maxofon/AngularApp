﻿using AngularApp.Services;
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
    [Route("api/cart")]
    public class CartController : Controller
    {
        private IUserService _userServ;
        private readonly IRepository<BL.CartLine> _cartLineRepo;
        private readonly IRepository<BL.Product> _productRepo;
        private readonly IMapper _mapper;

        public CartController(IRepository<BL.CartLine> cartLineRepo, 
                            IRepository<BL.Product> productRepo,
                            IUserService userServ, 
                            IMapper mapper)
        {
            _cartLineRepo = cartLineRepo;
            _userServ = userServ;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.CartLine>>> Get()
        {
            try
            {
                var user = _userServ.GetUser();
                if (user == null)
                    return Unauthorized("User is not authentificated.");

                //return await db.CartLines.Where(c => c.UserId == user.Id).Include(c => c.Product).ToListAsync();
                var entities = await _cartLineRepo.FindByAsync(c => c.UserId == user.Id);

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.CartLine>(item);
                    return mapEntity;
                }).ToList();
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
                    return Unauthorized("User is not authentificated.");

                //var entities = await db.CartLines.Where(c => c.UserId == user.Id).ToListAsync();
                var entities = await _cartLineRepo.FindByAsync(c => c.UserId == user.Id);

                return entities.Sum(c => c.Price * c.Quantity);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<API.CartLine>> Get(int id)
        {
            try
            {
                var entity = await _cartLineRepo.GetByIdAsync(id);
                return _mapper.Map<API.CartLine>(entity);            }
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
                //var product = await db.Products.FirstOrDefaultAsync(p => p.Id == id);
                var product = await _productRepo.GetByIdAsync(id);
                if (product == null)
                    return NotFound("Item is not found.");

                var user = _userServ.GetUser();
                if (user == null)
                    return Unauthorized("User is not authentificated.");

                var cartLineList = await _cartLineRepo.FindByAsync(c => c.UserId == user.Id && c.ProductId == product.Id);
                var cartLine = cartLineList.FirstOrDefault();
                if (cartLine == null)
                {
                    BL.CartLine newItem = new BL.CartLine
                    {
                        Quantity = 1,
                        ProductId = product.Id,
                        Price = product.Price,
                        UserId = user.Id
                    };

                    //db.CartLines.Add(newItem);
                    //await db.SaveChangesAsync();
                    await _cartLineRepo.SaveAsync(newItem);
                    return Ok(newItem);
                }
                else
                {
                    cartLine.Quantity += 1;
                    //db.Update(cartLine);
                    //await db.SaveChangesAsync();
                    await _cartLineRepo.SaveAsync(cartLine);
                    return Ok(cartLine);
                }
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }                       
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]API.CartLine cartLine)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //db.Update(cartLine);
                    //await db.SaveChangesAsync();
                    await _cartLineRepo.SaveAsync(_mapper.Map<BL.CartLine>(cartLine));

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
                BL.CartLine cartLine = await _cartLineRepo.GetByIdAsync(id);
                if (cartLine != null)
                {
                    //db.CartLines.Remove(cartLine);
                    //await db.SaveChangesAsync();
                    await _cartLineRepo.DeleteAsync(id);
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

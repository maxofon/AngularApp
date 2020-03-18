using AutoMapper;
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
    [Route("api/cart")]
    [ApiController]
    public class CartController : Controller
    {
        private IUserService _userServ;
        private readonly ICartLineRepository _cartLineRepo;
        private readonly IProductRepository _productRepo;
        private readonly IMapper _mapper;

        public CartController(ICartLineRepository cartLineRepo, 
                            IProductRepository productRepo,
                            IUserService userServ, 
                            IMapper mapper)
        {
            _cartLineRepo = cartLineRepo;
            _productRepo = productRepo;
            _userServ = userServ;
            _mapper = mapper;
        }

        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<API.CartLine>>> Get()
        {
            try
            {
                var user = _userServ.GetUser();
                //if (user == null)
                //    return Unauthorized("User is not authentificated.");

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
         [Authorize]
        public async Task<ActionResult<decimal>> GetTotal()
        {
            try
            {
                var user = _userServ.GetUser();
                //if (user == null)
                //    return Unauthorized("User is not authentificated.");

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
        [Authorize]
        public async Task<IActionResult> Post(int id)
        {
            try
            {
                var product = await _productRepo.GetByIdAsync(id);
                if (product == null)
                    return NotFound("Item is not found.");

                var user = _userServ.GetUser();
                //if (user == null)
                //    return Unauthorized("User is not authentificated.");

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

                    var newItemId = await _cartLineRepo.SaveAsync(newItem);
                    newItem = await _cartLineRepo.GetByIdAsync(newItemId);
                    return Ok(newItem);
                }
                else
                {
                    cartLine.Quantity += 1;
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
                    await _cartLineRepo.DeleteAsync(id);
                    return Ok(cartLine);
                }

                return BadRequest("Item not found.");
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
           
        }
    }
}

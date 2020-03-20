using AutoMapper;
using BusinessLogic.Interfaces.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API = AngularApp.Models;
using BL = BusinessLogic.ModelsDTO;

namespace AngularApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OrderLineController : Controller
    {        
        private readonly IOrderLineRepository _orderLineRepo;
        private readonly IMapper _mapper;

        public OrderLineController(IOrderLineRepository orderLineRepo,
                                IMapper mapper)
        {
            _orderLineRepo = orderLineRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.OrderLine>>> GetAll()
        {
            try
            {
                var entities = await _orderLineRepo.GetAsync();

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.OrderLine>(item);
                    return mapEntity;
                }).ToList();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpGet("{orderId}")]
        public async Task<ActionResult<IEnumerable<API.OrderLine>>> GetByOrderId(int orderId)
        {
            try
            {
                var entities = await _orderLineRepo.FindByAsync(ol => ol.OrderId == orderId);

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.OrderLine>(item);
                    return mapEntity;
                }).ToList();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<API.OrderLine>> GetById(int id)
        {
            try
            {
                var entity = await _orderLineRepo.GetByIdAsync(id);
                
                return _mapper.Map<API.OrderLine>(entity);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]API.OrderLine orderLine)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _orderLineRepo.SaveAsync(_mapper.Map<BL.OrderLine>(orderLine));
                    return Ok(await _orderLineRepo.GetByIdAsync(newItemId));
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]API.OrderLine orderLine)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _orderLineRepo.SaveAsync(_mapper.Map<BL.OrderLine>(orderLine));                    
                    return Ok(await _orderLineRepo.GetByIdAsync(newItemId));
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
                var orderLine = await _orderLineRepo.GetByIdAsync(id);
                if (orderLine != null)
                {
                    await _orderLineRepo.DeleteAsync(id);
                    return Ok(orderLine);
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

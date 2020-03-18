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
    [Route("api/products")]
    [ApiController]
    public class ProductController : Controller
    {        
        private readonly IProductRepository _productRepo;
        private readonly IMapper _mapper;

        public ProductController(IProductRepository productRepo,
                                IMapper mapper)
        {
            _productRepo = productRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.Product>>> Get()
        {
            try
            {
                var entities = await _productRepo.GetAsync();

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.Product>(item);
                    return mapEntity;
                }).ToList();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<API.Product>> Get(int id)
        {
            try
            {
                var entity = await _productRepo.GetByIdAsync(id);
                
                return _mapper.Map<API.Product>(entity);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]API.Product product)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _productRepo.SaveAsync(_mapper.Map<BL.Product>(product));
                    return Ok(await _productRepo.GetByIdAsync(newItemId));
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]API.Product product)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _productRepo.SaveAsync(_mapper.Map<BL.Product>(product));                    
                    return Ok(await _productRepo.GetByIdAsync(newItemId));
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
                var product = await _productRepo.GetByIdAsync(id);
                if (product != null)
                {
                    await _productRepo.DeleteAsync(id);
                    return Ok(product);
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

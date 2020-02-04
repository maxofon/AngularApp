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
    [Route("api/products")]
    public class ProductController : Controller
    {
        //private ApplicationContext db;
        
        //public ProductController(ApplicationContext context)
        //{
        //    db = context;            

        //    if (!db.Products.Any())
        //    {
        //        db.Products.Add(new Product { Name = "iPhone X", Company = "Apple", Price = 1200 });
        //        db.Products.Add(new Product { Name = "Galaxy S8", Company = "Samsung", Price = 750 });
        //        db.Products.Add(new Product { Name = "Pixel 2", Company = "Google", Price = 450 });
        //        db.SaveChanges();
        //    }
        //}

        private readonly IRepository<BL.Product> _productRepo;
        private readonly IMapper _mapper;

        public ProductController(IRepository<BL.Product> productRepo,
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
                //return await db.Products.ToListAsync();
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
                //return await db.Products.FirstOrDefaultAsync(x => x.Id == id);
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
                    //db.Products.Add(product);
                    //await db.SaveChangesAsync();
                    await _productRepo.SaveAsync(_mapper.Map<BL.Product>(product));
                    return Ok(product);
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
                    //db.Update(product);
                    //await db.SaveChangesAsync();
                    await _productRepo.SaveAsync(_mapper.Map<BL.Product>(product));
                    return Ok(product);
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
                var product = _productRepo.GetByIdAsync(id);
                if (product != null)
                {
                    //db.Products.Remove(product);
                    //await db.SaveChangesAsync();
                    await _productRepo.DeleteAsync(id);
                }
                return Ok(product);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }
    }
}

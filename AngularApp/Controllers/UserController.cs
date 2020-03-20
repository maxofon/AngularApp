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
    [Route("api/users")]
    [ApiController]
    public class UserController : Controller
    {        
        private readonly IUserRepository _userRepo;
        private readonly IMapper _mapper;

        public UserController(IUserRepository userRepo,
                                IMapper mapper)
        {
            _userRepo = userRepo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<API.User>>> Get()
        {
            try
            {
                var entities = await _userRepo.GetAsync();

                return entities.Select(item =>
                {
                    var mapEntity = _mapper.Map<API.User>(item);
                    return mapEntity;
                }).ToList();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<API.User>> Get(int id)
        {
            try
            {
                var entity = await _userRepo.GetByIdAsync(id);
                
                return _mapper.Map<API.User>(entity);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]API.User user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _userRepo.SaveAsync(_mapper.Map<BL.User>(user));
                    return Ok(await _userRepo.GetByIdAsync(newItemId));
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]API.User user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newItemId = await _userRepo.SaveAsync(_mapper.Map<BL.User>(user));                    
                    return Ok(await _userRepo.GetByIdAsync(newItemId));
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
                var user = await _userRepo.GetByIdAsync(id);
                if (user != null)
                {
                    await _userRepo.DeleteAsync(id);
                    return Ok(user);
                }

                return BadRequest("User not found.");                
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }
    }
}

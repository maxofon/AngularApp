using AngularApp.Models;
using BusinessLogic.Interfaces;
using BusinessLogic.Interfaces.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using BL = BusinessLogic.ModelsDTO;

namespace AngularApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountController : Controller
    {
        private IUserService _userServ;
        private readonly IUserRepository<BL.User> _userRepo;

        public AccountController(IUserRepository<BL.User> userRepo, IUserService userServ)
        {
            _userRepo = userRepo;
            _userServ = userServ;
        }

        [HttpGet]
        [Authorize]
        public IActionResult GetUser()
        {
            try
            {
                var user = _userServ.GetUser();
                //if (user == null)
                //    return Unauthorized("User is not authentificated.");

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        [HttpGet]
        public async Task<IActionResult> GetFirstUser()
        {
            try
            {
                var user = await _userRepo.GetByIdAsync(1);

                return Ok(user);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
           
        }

        [HttpGet]
        public IActionResult GetCookies()
        {
            try
            {
                var cookies = _userServ.GetCookies();
                if (cookies.Count == 0)
                    return BadRequest("Cookies is not assigned");

                return Ok(cookies);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var userList = await _userRepo.FindByAsync(u => u.Email == model.Email && u.Password == model.Password);
                    var user = userList.FirstOrDefault();
                    if (user != null)
                    {
                        await Authenticate(user.Email); // аутентификация

                        return Ok(user);
                    }

                    return BadRequest($"Пользователь {model.Email} не найден.");
                }

                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var userList = await _userRepo.FindByAsync(u => u.Email == model.Email && u.Password == model.Password);
                    var user = userList.FirstOrDefault();
                    if (user == null)
                    {
                        // добавляем пользователя в бд
                        await _userRepo.SaveAsync(new BL.User { Name = model.Name, Email = model.Email, Password = model.Password });

                        await Authenticate(model.Email); // аутентификация

                        return Ok(user);
                    }
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        private async Task Authenticate(string userName)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };

            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }

        public async Task<IActionResult> Logout()
        {
            try
            {
                await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }
            
        }
    }
}

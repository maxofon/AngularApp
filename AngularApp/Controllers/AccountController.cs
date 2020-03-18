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
        private readonly IUserRepository _userRepo;
        private readonly IRoleRepository _roleRepo;

        public AccountController(
            IUserRepository userRepo,
            IRoleRepository roleRepo,
            IUserService userServ)
        {
            _userRepo = userRepo;
            _roleRepo = roleRepo;
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
                        await Authenticate(user); // аутентификация

                        return Ok(user);
                    }

                    return BadRequest($"Пользователь {model.Email} не найден или пароль неверный.");
                }

                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }            
        }

        [HttpPost]
        public async Task<IActionResult> LoginAdmin([FromBody]LoginModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var userList = await _userRepo.FindByAsync(u => u.Email == model.Email && u.Password == model.Password);
                    var user = userList.FirstOrDefault();
                    if (user != null)
                    {
                        int roleId = user.RoleId.HasValue ? (int)user.RoleId : 0;                        
                        BL.Role userRole = await _roleRepo.GetByIdAsync(roleId);

                        if (userRole.Name != "admin")
                        {
                            return BadRequest($"{model.Email}, к сожалению вы не ADMIN. Войдите как ADMIN");
                        }

                        await Authenticate(user); // аутентификация

                        return Ok(user);
                    }

                    return BadRequest($"Пользователь {model.Email} не найден или пароль неверный.");
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
                    var userList = await _userRepo.FindByAsync(u => u.Email == model.Email);
                    var user = userList.FirstOrDefault();
                    if (user == null)
                    {
                        var roleList = await _roleRepo.FindByAsync(r => r.Name == "user");
                        BL.Role userRole = roleList.FirstOrDefault();

                        // добавляем пользователя в бд
                        var newUserId =  await _userRepo.SaveAsync(new BL.User { 
                            Name = model.Name, 
                            Email = model.Email, 
                            Password = model.Password,
                            RoleId = userRole?.Id,
                            Role = userRole
                        });

                        // добавляем пользователя в бд
                        var newUser = await _userRepo.GetByIdAsync(newUserId);

                        await Authenticate(newUser); // аутентификация

                        return Ok(newUser);
                    }

                    return BadRequest($"Пользователь {model.Email} уже зарегистрирован.");
                }
                return BadRequest(ModelState);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message}");
            }           
        }

        private async Task Authenticate(BL.User user)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
                new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role?.Name ?? "null")
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

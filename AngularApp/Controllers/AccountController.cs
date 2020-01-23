using AngularApp.Models;
using AngularApp.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace AngularApp.Controllers
{
    [Route("api/[controller]/[action]")]
    public class AccountController : Controller
    {
        private ApplicationContext db;
        private UserService _userServ;
        public AccountController(ApplicationContext context, UserService userServ)
        {
            db = context;
            _userServ = userServ;
        }

        [HttpGet]
        public IActionResult GetUser()
        {
            var user = _userServ.GetUser();
            if (user == null)          
                return BadRequest("User is not authentificate");

            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetFirstUser()
        {
            var user = db.Users.FirstOrDefault();

            return Ok(user);
        }

        [HttpGet]
        public IActionResult GetCookies()
        {
            var cookies = _userServ.GetCookies();
            if (cookies.Count == 0)
                return BadRequest("Cookies is not assigned");

            return Ok(cookies);
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody]LoginModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email && u.Password == model.Password);
                if (user != null)
                {
                    await Authenticate(model.Email); // аутентификация

                    return Ok(user);
                }                
            }

            return BadRequest(ModelState);
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                User user = await db.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
                if (user == null)
                {
                    // добавляем пользователя в бд
                    db.Users.Add(new User { Name = model.Name,Email = model.Email, Password = model.Password });
                    await db.SaveChangesAsync();

                    await Authenticate(model.Email); // аутентификация

                    return Ok(user);
                }               
            }
            return BadRequest(ModelState);
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
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return Ok();
        }
    }
}

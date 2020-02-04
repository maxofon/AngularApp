using AngularApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Services
{
    public class UserService
    {
        private ApplicationContext db;
        private IHttpContextAccessor _httpContextAccessor;
        public UserService(ApplicationContext context, IHttpContextAccessor httpContextAccessor)
        {
            db = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public User GetUser()
        {
            var userName = _httpContextAccessor?.HttpContext.User.Identity.Name;
            var user = db.Users.FirstOrDefault(u => u.Email == userName);
            return user;
        }

        public IRequestCookieCollection GetCookies()
        {
            return _httpContextAccessor?.HttpContext.Request.Cookies;
        }
    }
}

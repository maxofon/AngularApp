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
        private IServiceProvider _servProv;
        public UserService(ApplicationContext context, IServiceProvider servProv)
        {
            db = context;
            _servProv = servProv;
        }

        public User GetUser()
        {
            var userName = _servProv.GetRequiredService<IHttpContextAccessor>()?.HttpContext.User.Identity.Name;
            var user = db.Users.FirstOrDefault(u => u.Email == userName);
            return user;
        }

        public IRequestCookieCollection GetCookies()
        {
            return _servProv.GetRequiredService<IHttpContextAccessor>()?.HttpContext.Request.Cookies;
        }
    }
}

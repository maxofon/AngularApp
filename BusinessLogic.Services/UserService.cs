using BusinessLogic.Interfaces;
using DataAccess.Database.Interfaces;
using DataAccess.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BusinessLogic.Services
{
    public class UserService : IUserService
    {
        private readonly IContextFactory _contextFactory;
        private IHttpContextAccessor _httpContextAccessor;
        public UserService(IContextFactory contextFactory, IHttpContextAccessor httpContextAccessor)
        {
            _contextFactory = contextFactory;
            _httpContextAccessor = httpContextAccessor;
        }

        public IRequestCookieCollection GetCookies()
        {
            return _httpContextAccessor?.HttpContext.Request.Cookies;
        }

        public User GetUser()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var userName = _httpContextAccessor?.HttpContext.User.Identity.Name;
                var user = context.Users.FirstOrDefault(u => u.Email == userName);
                return user;
            }
        }
    }
}

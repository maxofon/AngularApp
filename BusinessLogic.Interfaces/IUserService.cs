using DataAccess.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLogic.Interfaces
{
    public interface IUserService
    {
        User GetUser();
        IRequestCookieCollection GetCookies();
    }
}

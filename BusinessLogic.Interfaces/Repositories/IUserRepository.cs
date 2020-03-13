using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IUserRepository<T> : IBaseRepository<T> where T: class
    {
        Task<ICollection<T>> FindByAsync(Expression<Func<DA.User,bool>> predicate);
    }
}

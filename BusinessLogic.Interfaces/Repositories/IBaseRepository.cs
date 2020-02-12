using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IBaseRepository<T> where T: class
    {
        Task<ICollection<T>> GetAsync();
        Task<int> SaveAsync(T entity);
        Task DeleteAsync(int id);
        Task<T> GetByIdAsync(int id);
    }
}

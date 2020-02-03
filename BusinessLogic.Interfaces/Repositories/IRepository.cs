using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IRepository<T> where T: class
    {
        Task<ICollection<T>> GetAsync();
        Task<int> SaveAsync(T entity);
        Task DeleteAsync(int id);
        Task<T> GetByIdAsync(int id);
        Task<ICollection<T>> FindByAsync(Func<T,bool> predicate);
    }
}

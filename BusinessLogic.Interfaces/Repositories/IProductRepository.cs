using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IProductRepository: IBaseRepository<BL.Product>
    {
        Task<ICollection<BL.Product>> FindByAsync(Expression<Func<DA.Product,bool>> predicate);
    }
}

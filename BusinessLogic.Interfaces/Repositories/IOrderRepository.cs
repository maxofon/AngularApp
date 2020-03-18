using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IOrderRepository: IBaseRepository<BL.Order>
    {
        Task<ICollection<BL.Order>> FindByAsync(Expression<Func<DA.Order,bool>> predicate);
    }
}

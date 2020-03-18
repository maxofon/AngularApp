using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IOrderLineRepository: IBaseRepository<BL.OrderLine>
    {
        Task<ICollection<BL.OrderLine>> FindByAsync(Expression<Func<DA.OrderLine,bool>> predicate);
    }
}

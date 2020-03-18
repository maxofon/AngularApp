using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface ICartLineRepository: IBaseRepository<BL.CartLine> 
    {
        Task<ICollection<BL.CartLine>> FindByAsync(Expression<Func<DA.CartLine,bool>> predicate);
    }
}

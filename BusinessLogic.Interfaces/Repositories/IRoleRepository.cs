using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IRoleRepository: IBaseRepository<BL.Role>
    {
        Task<ICollection<BL.Role>> FindByAsync(Expression<Func<DA.Role,bool>> predicate);
    }
}

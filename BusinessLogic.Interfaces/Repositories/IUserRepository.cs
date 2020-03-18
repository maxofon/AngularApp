using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DA = DataAccess.Models;
using BL = BusinessLogic.ModelsDTO;

namespace BusinessLogic.Interfaces.Repositories
{
    public interface IUserRepository: IBaseRepository<BL.User>
    {
        Task<ICollection<BL.User>> FindByAsync(Expression<Func<DA.User,bool>> predicate);
    }
}

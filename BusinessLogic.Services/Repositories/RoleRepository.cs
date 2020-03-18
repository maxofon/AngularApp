using AutoMapper;
using BusinessLogic.Interfaces.Repositories;
using DataAccess.Database.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using BL = BusinessLogic.ModelsDTO;
using DA = DataAccess.Models;

namespace BusinessLogic.Services.Repositories
{
    public class RoleRepository : IRoleRepository
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public RoleRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.Role>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Roles.ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.Role>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.Role> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Roles.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.Role>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.Role entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .Roles
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.Role();
                        MapForUpdateEntity(entity, entityModel);
                        await context.Roles.AddAsync(entityModel);
                    }
                    else
                    {
                        MapForUpdateEntity(entity, entityModel);
                    }

                    context.SaveChanges();
                    return entityModel.Id;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public async Task DeleteAsync(int id)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = context
                        .Roles
                        .FirstOrDefault(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.Roles.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void MapForUpdateEntity(BL.Role entity, DA.Role daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Name = entity.Name;        
        }

        public async Task<ICollection<BL.Role>> FindByAsync(Expression<Func<DA.Role, bool>> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .Roles
                        //.Include(u => u.Role)
                        .Where(predicate)
                        .ToListAsync();

                    return entity.Select(item =>
                                {
                                    var mapEntity = _mapper.Map<BL.Role>(item);
                                    return mapEntity;
                                })
                                .ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

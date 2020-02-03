using AutoMapper;
using BusinessLogic.Interfaces.Repositories;
using DataAccess.Database.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BL = BusinessLogic.ModelsDTO;
using DA = DataAccess.Models;

namespace BusinessLogic.Services.Repositories
{
    public class UserRepository : IRepository<BL.User>
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public UserRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.User>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Users.ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.User>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.User> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Users.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.User>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.User entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .Users
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.User();
                        MapForUpdateEntity(entity, entityModel);
                        await context.Users.AddAsync(entityModel);
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
                        .Users
                        .FirstOrDefault(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.Users.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void MapForUpdateEntity(BL.User entity, DA.User daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Name = entity.Name;
            daEntity.Email = entity.Email;
            daEntity.Password = entity.Password;           
            //daEntity.RoleId = entity.RoleId;           
        }

        public async Task<ICollection<BL.User>> FindByAsync(Func<BL.User, bool> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .Users
                        //.Include(u => u.Role)
                        .ToListAsync();

                    return entity.Select(item =>
                                            {
                                                var mapEntity = _mapper.Map<BL.User>(item);
                                                return mapEntity;
                                            })
                                .Where(predicate).ToList();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}

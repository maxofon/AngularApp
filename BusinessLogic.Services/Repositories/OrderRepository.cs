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
    public class OrderRepository : IOrderRepository<BL.Order>
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public OrderRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.Order>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context
                    .Orders
                    .ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.Order>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.Order> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Orders.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.Order>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.Order entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .Orders
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.Order();
                        MapForUpdateEntity(entity, entityModel);
                        await context.Orders.AddAsync(entityModel);
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
                    var entityModel = await context
                        .Orders
                        .FirstOrDefaultAsync(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.Orders.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void MapForUpdateEntity(BL.Order entity, DA.Order daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Name = entity.Name;
            daEntity.Surname = entity.Surname;
            daEntity.Address = entity.Address;
            daEntity.Phone = entity.Phone;
            daEntity.Email = entity.Email;
            daEntity.OrderTime = entity.OrderTime;            
            daEntity.Amount = entity.Amount;            
        }

        public async Task<ICollection<BL.Order>> FindByAsync(Expression<Func<DA.Order, bool>> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .Orders
                        .Where(predicate)
                        .ToListAsync();

                    return entity.Select(item =>
                            {
                                var mapEntity = _mapper.Map<BL.Order>(item);
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

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
    public class OrderLineRepository : IOrderLineRepository
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public OrderLineRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.OrderLine>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context
                    .OrderLines
                    .ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.OrderLine>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.OrderLine> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.OrderLines.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.OrderLine>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.OrderLine entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .OrderLines
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.OrderLine();
                        MapForUpdateEntity(entity, entityModel);
                        await context.OrderLines.AddAsync(entityModel);
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
                        .OrderLines
                        .FirstOrDefaultAsync(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.OrderLines.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void MapForUpdateEntity(BL.OrderLine entity, DA.OrderLine daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.OrderId = entity.OrderId;
            daEntity.ProductId = entity.ProductId;
            daEntity.Price = entity.Price;
            daEntity.Quantity = entity.Quantity;

        }

        public async Task<ICollection<BL.OrderLine>> FindByAsync(Expression<Func<DA.OrderLine, bool>> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .OrderLines
                        .Where(predicate)
                        .Include(c => c.Order)
                        .ToListAsync();

                    return entity.Select(item =>
                        {
                            var mapEntity = _mapper.Map<BL.OrderLine>(item);
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

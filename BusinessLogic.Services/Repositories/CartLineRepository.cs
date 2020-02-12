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
    public class CartLineRepository : ICartLineRepository<BL.CartLine>
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public CartLineRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.CartLine>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {   
                var entity = await context
                    .CartLines
                    .Include(c => c.Product)
                    .ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.CartLine>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.CartLine> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.CartLines.Include(c => c.Product).FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.CartLine>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.CartLine entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .CartLines
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.CartLine();
                        MapForUpdateEntity(entity, entityModel);
                        
                        await context.CartLines.AddAsync(entityModel);
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
                        .CartLines
                        .FirstOrDefaultAsync(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.CartLines.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<ICollection<BL.CartLine>> FindByAsync(Expression<Func<DA.CartLine, bool>> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .CartLines
                        .Where(predicate)
                        .Include(c => c.Product)
                        .ToListAsync();

                    return entity.Select(item =>
                                        {
                                            var mapEntity = _mapper.Map<BL.CartLine>(item);
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
    
        private void MapForUpdateEntity(BL.CartLine entity, DA.CartLine daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Price = entity.Price;
            daEntity.Quantity = entity.Quantity;
            daEntity.UserId = entity.UserId;
            //daEntity.User = _mapper.Map<DA.User>(entity);
            daEntity.ProductId = entity.ProductId;
            //daEntity.Product = _mapper.Map<DA.Product>(entity);
        }       
    }
}

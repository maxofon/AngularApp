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
    public class ProductRepository : IProductRepository<BL.Product>
    {
        private readonly IContextFactory _contextFactory;
        private readonly IMapper _mapper;

        public ProductRepository(IMapper mapper, IContextFactory contextFactory)
        {
            _mapper = mapper;
            _contextFactory = contextFactory;
        }

        public async Task<ICollection<BL.Product>> GetAsync()
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context
                    .Products
                    .ToListAsync();

                return entity.Select(item =>
                {
                    var mapEntity = _mapper.Map<BL.Product>(item);
                    return mapEntity;
                }).ToList();
            }
        }

        public async Task<BL.Product> GetByIdAsync(int id)
        {
            using (var context = _contextFactory.GetProductContext())
            {
                var entity = await context.Products.FirstOrDefaultAsync(x => x.Id == id);
                return _mapper.Map<BL.Product>(entity);
            }
        }

        public async Task<int> SaveAsync(BL.Product entity)
        {
            try
            {
                if (entity == null) return 0;

                using (var context = _contextFactory.GetProductContext())
                {
                    var entityModel = await context
                    .Products
                    .FirstOrDefaultAsync(item => item.Id.Equals(entity.Id));

                    if (entityModel == null)
                    {
                        entityModel = new DA.Product();
                        MapForUpdateEntity(entity, entityModel);
                        await context.Products.AddAsync(entityModel);
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
                        .Products
                        .FirstOrDefaultAsync(item => item.Id.Equals(id));

                    if (entityModel == null) return;

                    await Task.Run(() => context.Products.Remove(entityModel));

                    context.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        private void MapForUpdateEntity(BL.Product entity, DA.Product daEntity)
        {
            daEntity.Id = entity.Id;
            daEntity.Name = entity.Name;
            daEntity.Company = entity.Company;
            daEntity.Price = entity.Price;          
        }

        public async Task<ICollection<BL.Product>> FindByAsync(Expression<Func<DA.Product, bool>> predicate)
        {
            try
            {
                using (var context = _contextFactory.GetProductContext())
                {
                    var entity = await context
                        .Products
                        .Where(predicate)
                        .ToListAsync();

                    return entity.Select(item =>
                            {
                                var mapEntity = _mapper.Map<BL.Product>(item);
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

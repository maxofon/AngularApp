using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using DataAccess.Database.Interfaces;

namespace DataAccess.Database.Contexts
{
    public class ContextFactory : IContextFactory
    {
        private readonly IConfiguration _configuration;

        public ContextFactory(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IProductContext GetProductContext()
        {

            var dbOptionsBuilder = new DbContextOptionsBuilder<ProductContext>();
            dbOptionsBuilder
                .UseSqlServer(_configuration.GetConnectionString("DefaultConnection"),
                sqlServerOptionsAction: sqlOptions => sqlOptions.MigrationsAssembly(GetType().Namespace));

            return new ProductContext(dbOptionsBuilder.Options);
        }

        public void Dispose()
        {
        }
    }
}

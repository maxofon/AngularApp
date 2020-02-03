using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DataAccess.Database.Interfaces;
using DataAccess.Database.Contexts;

namespace DataAccess.Database.Extensions
{
    public static class DatabaseExtensions
    {
        /// <summary>
        /// Configures services for DataAccess assembly
        /// </summary>
        /// <param name="services"></param>
        /// <param name="connectionString">database connection string</param>
        /// <returns></returns>
        public static IServiceCollection ConfigureDataAccess(this IServiceCollection services, string connectionString)
        {
            services.AddTransient<IContextFactory, ContextFactory>();
            services.AddTransient<IProductContext, ProductContext>();

            services.AddDbContext<ProductContext>(
                options => options.UseSqlServer(connectionString, b => b.MigrationsAssembly("Database")));

            services.AddEntityFrameworkSqlServer();

            return services;
        }
    }
}

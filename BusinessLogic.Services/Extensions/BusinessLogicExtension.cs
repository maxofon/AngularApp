using BusinessLogic.Interfaces.Repositories;
using DataAccess.Models;
using Microsoft.Extensions.DependencyInjection;


namespace BusinessLogic.Services.Extensions
{
    public static class BusinessLogicExtension
    {
        /// <summary>
        /// Configures services for BusinessLogic
        /// </summary>
        /// <param name="services"></param>
        /// <returns></returns>
        public static IServiceCollection ConfigureBusinessLogic(this IServiceCollection services)
        {
            services.AddTransient<IRepository<Product>, ProductRepository>();
            services.AddTransient<IRepository<Order>, OrderRepository>();
            services.AddTransient<IRepository<OrderLine>, OrderLineRepository>();
            services.AddTransient<IRepository<CartLine>, CartLineRepository>();
            services.AddTransient<IRepository<User>, UserRepository>();

            return services;
        }
    }
}

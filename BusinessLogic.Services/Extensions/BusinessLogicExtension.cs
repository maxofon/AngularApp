using BusinessLogic.Interfaces;
using BusinessLogic.Interfaces.Repositories;
using BusinessLogic.ModelsDTO;
using BusinessLogic.Services.Repositories;
using Microsoft.AspNetCore.Http;
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
            services.AddTransient<IProductRepository<Product>, ProductRepository>();
            services.AddTransient<IOrderRepository<Order>, OrderRepository>();
            services.AddTransient<IOrderLineRepository<OrderLine>, OrderLineRepository>();
            services.AddTransient<ICartLineRepository<CartLine>, CartLineRepository>();
            services.AddTransient<IUserRepository<User>, UserRepository>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<IUserService, UserService>();

            return services;
        }
    }
}

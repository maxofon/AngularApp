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
            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<IOrderLineRepository, OrderLineRepository>();
            services.AddTransient<ICartLineRepository, CartLineRepository>();
            services.AddTransient<IUserRepository, UserRepository>();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddTransient<IUserService, UserService>();

            return services;
        }
    }
}

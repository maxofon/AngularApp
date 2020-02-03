using Microsoft.EntityFrameworkCore;
using System.Linq;
using DataAccess.Database.Interfaces;
using DataAccess.Models;

namespace DataAccess.Database.Contexts
{
    public class ProductContext : DbContext, IProductContext
    {       
        public ProductContext(DbContextOptions options)
            : base(options)
        {
            DbInitializer.Initialize(this);
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<CartLine> CartLines { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderLine> OrderLines { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            foreach (var relationship in builder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict;
            }

            base.OnModelCreating(builder);
        }
        
    }
}

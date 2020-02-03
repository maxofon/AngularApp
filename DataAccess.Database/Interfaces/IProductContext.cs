using DataAccess.Models;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Database.Interfaces
{
    public interface IProductContext : IDbContext
    {
        //DbSet<CartLine> CartLines { get; set; }
        //DbSet<Category> Categories { get; set; }
        //DbSet<Order> Orders { get; set; }
        //DbSet<OrderLine> OrderLines { get; set; }
        //DbSet<CartLine> CartLines { get; set; }
        //DbSet<User> Users { get; set; }
        //DbSet<Role> Roles { get; set; }

        DbSet<Product> Products { get; set; }
        DbSet<CartLine> CartLines { get; set; }
        DbSet<Order> Orders { get; set; }
        DbSet<OrderLine> OrderLines { get; set; }
        DbSet<User> Users { get; set; }
    }
}

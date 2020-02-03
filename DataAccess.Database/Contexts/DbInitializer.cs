using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAccess.Database.Contexts
{
    public static class DbInitializer
    {
        public static void Initialize(ProductContext context)
        {
            //context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
          
            if (!context.Products.Any())
            {
                context.Products.Add(new Product { Name = "iPhone X", Company = "Apple", Price = 1200 });
                context.Products.Add(new Product { Name = "Galaxy S8", Company = "Samsung", Price = 750 });
                context.Products.Add(new Product { Name = "Pixel 2", Company = "Google", Price = 450 });
                context.SaveChanges();
            }

        }      

    }
}


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

            //if (!context.Categories.Any())
            //{
            //    context.Categories.AddRange(Categories.Select(c => c.Value));
            //}

            if (!context.Products.Any())
            {
                context.Products.Add(new Product { Name = "iPhone X", Company = "Apple", Price = 1200 });
                context.Products.Add(new Product { Name = "Galaxy S8", Company = "Samsung", Price = 750 });
                context.Products.Add(new Product { Name = "Pixel 2", Company = "Google", Price = 450 });
                context.SaveChanges();
            }

            //if (!context.FoodItems.Any())
            //{
            //    context.AddRange(
            //        new FoodItem
            //        {
            //            Name = "Рис отварной",
            //            ShortDescription = "Вкусный наваристый рис",
            //            LongDescription = "Вкусный наваристый рис",
            //            Img = "/img/ris.jpg",
            //            Price = 4500,
            //            IsFavorite = true,
            //            Available = true,
            //            Category = Categories["Гарниры"]
            //        },
            //        new FoodItem
            //        {
            //            Name = "Пюре",
            //            ShortDescription = "Пюре на молоке",
            //            LongDescription = "Пюре на молоке",
            //            Img = "/img/pure.jpg",
            //            Price = 14000,
            //            IsFavorite = true,
            //            Available = true,
            //            Category = Categories["Гарниры"]
            //        },
            //        new FoodItem
            //        {
            //            Name = "Солянка",
            //            ShortDescription = "Суп сборная солянка",
            //            LongDescription = "Сборная солянка",
            //            Img = "/img/solyanka.jpg",
            //            Price = 11000,
            //            IsFavorite = true,
            //            Available = true,
            //            Category = Categories["Супы"]
            //        },
            //        new FoodItem
            //        {
            //            Name = "Цезарь",
            //            ShortDescription = "Салат цезарь классический",
            //            LongDescription = "Салат цезарь классический",
            //            Img = "/img/cezar.jpg",
            //            Price = 65000,
            //            IsFavorite = true,
            //            Available = true,
            //            Category = Categories["Салаты"]
            //        },
            //        new FoodItem
            //        {
            //            Name = "Каша гречневая",
            //            ShortDescription = "Каша гречневая с маслом",
            //            LongDescription = "Каша гречневая с маслом",
            //            Img = "/img/grechka.jpg",
            //            Price = 40000,
            //            IsFavorite = true,
            //            Available = true,
            //            Category = Categories["Гарниры"]
            //        }
            //    );
            //}

            //context.SaveChanges();

        }

        //public static Dictionary<string, Category> category;
        //public static Dictionary<string, Category> Categories
        //{
        //    get
        //    {
        //        if (category == null)
        //        {
        //            var list = new Category[]
        //            {
        //                new Category { Name = "Супы", Description = "Супы"},
        //                new Category { Name = "Гарниры", Description = "Гарниры"},
        //                new Category { Name = "Салаты", Description = "Салаты"},
        //            };

        //            category = new Dictionary<string, Category>();
        //            foreach (Category el in list)
        //            {
        //                category.Add(el.Name, el);
        //            }
        //        }

        //        return category;
        //    }
        //}

    }
}


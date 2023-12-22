using DMarket.Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Text.Json.JsonSerializer;

namespace DMarket.Infrastructure.Data
{
    public static class DatabaseSeeder
    {
        public static async Task SeedMarketDbAsync(IServiceScope scope)
        {
            var context = scope.ServiceProvider.GetRequiredService<MarketDbContext>();

            if (!context.ProductBrands.Any())
            {
                var json = File.ReadAllText("../DMarket.Infrastructure/Data/Seed/productbrands.json");
                var data = Deserialize<List<ProductBrand>>(json);
                await context.ProductBrands.AddRangeAsync(data!);

            }
            if (!context.ProductTypes.Any())
            {
                var json = File.ReadAllText("../DMarket.Infrastructure/Data/Seed/producttypes.json");
                var data = Deserialize<List<ProductType>>(json);
                await context.ProductTypes.AddRangeAsync(data!);
            }
            if (!context.Products.Any())
            {
                var json = File.ReadAllText("../DMarket.Infrastructure/Data/Seed/products.json");
                var data = Deserialize<List<Product>>(json);
                await context.Products.AddRangeAsync(data!);
            }

            if (context.ChangeTracker.HasChanges())
            {
                await context.SaveChangesAsync();
            }
        }
    }
}

using DMarket.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Data
{
    public class MarketDbContext : DbContext
    {
        public MarketDbContext(DbContextOptions options) : base(options){}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public DbSet<Product> Products {get;set;}
        public DbSet<ProductBrand> ProductBrands {get;set;}
        public DbSet<ProductType> ProductTypes {get;set;}

    }
}

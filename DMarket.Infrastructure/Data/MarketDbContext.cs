using Core.Entities.Order;
using DMarket.Core.Entities;
using DMarket.Core.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Reflection;


namespace DMarket.Infrastructure.Data
{
    public class MarketDbContext : IdentityDbContext<ApplicationUser>
    {
        public MarketDbContext(DbContextOptions<MarketDbContext> options) : base(options){}

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Address>().Property(p => p.ApplicationUserId).IsRequired();
            builder.Entity<Address>().HasOne(a => a.ApplicationUser).WithOne(u => u.Address)
                .HasForeignKey<Address>(p => p.ApplicationUserId);
            
            builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }

        public DbSet<Address> Addresses {get;set;}

        public DbSet<Product> Products {get;set;}
        public DbSet<ProductBrand> ProductBrands {get;set;}
        public DbSet<ProductType> ProductTypes {get;set;}

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }

    }
}

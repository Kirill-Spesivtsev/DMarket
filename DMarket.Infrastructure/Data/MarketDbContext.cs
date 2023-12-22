using DMarket.Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace DMarket.Infrastructure.Data
{
    public class MarketDbContext : DbContext
    {
        public MarketDbContext(DbContextOptions options) : base(options)
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        
        }

        public DbSet<Product> Products;

    }
}

using Microsoft.EntityFrameworkCore;

namespace DMarket.Api.Helpers
{
    public static class DbContextHelper
    {
        public static async Task GetDbContext<T>(WebApplication app) where T : DbContext
        {
            using var scope = app.Services.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<T>();
            await context.Database.MigrateAsync();
        }
    }
}

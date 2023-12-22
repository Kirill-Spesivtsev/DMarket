using Microsoft.EntityFrameworkCore;

namespace DMarket.Api.Helpers
{
    public static class MigrationHelper
    {
        public static async Task ApplyMigrationsIfAny<T>(IApplicationBuilder app) where T : DbContext
        {
            using var scope = app.ApplicationServices.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<T>();
            await context.Database.MigrateAsync();
        }
    }
}

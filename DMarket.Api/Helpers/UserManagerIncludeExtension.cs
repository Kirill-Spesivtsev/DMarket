using DMarket.Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace DMarket.Api.Helpers
{
    public static class UserManagerIncludeExtension
    {
        public static async Task<ApplicationUser?> GetUserWithIncludeAsync(
            this UserManager<ApplicationUser> userManager, 
            ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email);

            return await userManager.Users.Include(x => x.Address).FirstOrDefaultAsync(x => x.Email == email);
        }
    }
}

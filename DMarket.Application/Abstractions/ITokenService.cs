using DMarket.Core.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Application.Abstractions
{
    public interface ITokenService
    {
        public string GenerateToken(ApplicationUser user);
    }
}

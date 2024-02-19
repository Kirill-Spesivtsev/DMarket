using DMarket.Core.Entities.Order;
using DMarket.Core.Entities;
using DMarket.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IDeliveryMethodRepository
    {
        public IQueryable<DeliveryMethod> GetAllDeliveryMethodsAsync();
 
        public Task<DeliveryMethod?> GetDeliveryMethodByIdAsync(Guid id);

        public Task AddDeliveryMethod(DeliveryMethod entity);
  
        public Task UpdateDeliveryMethod(DeliveryMethod entity);

        public Task RemoveDeliveryMethod(DeliveryMethod entity);
    }
}

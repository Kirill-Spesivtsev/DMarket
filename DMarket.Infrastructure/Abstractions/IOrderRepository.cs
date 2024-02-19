using DMarket.Core.Entities.Order;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IOrderRepository
    {
        public IEnumerable<Order> GetAllOrdersAsync();

        public IQueryable<Order> GetFilteredOrdersAsync(Expression<Func<Order, bool>> predicate);
 
        public Task<Order?> GetOrderByIdAsync(Guid id);

        public Task AddOrder(Order entity);
  
        public Task UpdateOrder(Order entity);

        public Task RemoveOrder(Order entity);

    }
}

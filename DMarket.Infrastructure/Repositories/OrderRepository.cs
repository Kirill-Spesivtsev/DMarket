using DMarket.Core.Entities;
using DMarket.Core.Entities.Order;
using DMarket.Infrastructure.Abstractions;
using DMarket.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Repositories
{
    public class OrderRepository :IOrderRepository , IDisposable
    {
        private readonly MarketDbContext _context;
  
        public OrderRepository(MarketDbContext context)
        {
            _context = context;
        }  

        public IEnumerable<Order> GetAllOrdersAsync()  
        {  
            return _context.Orders.AsNoTracking();  
        }

        public IQueryable<Order> GetFilteredOrdersAsync(Expression<Func<Order, bool>> predicate)
        {
            return _context.Orders.Where(predicate);
        }
 
        public async Task<Order?> GetOrderByIdAsync(Guid id) => await _context.Orders.FindAsync(id);

        public async Task AddOrder(Order entity)
        {
            _context.Orders.Add(entity); 
            await _context.SaveChangesAsync();
        }
  
        public async Task UpdateOrder(Order entity)
        {
            _context.Orders.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveOrder(Order entity)
        { 
            _context.Orders.Remove(entity);
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed && disposing)
            {
                _context?.Dispose();
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    
    }
}

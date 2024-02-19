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
    public class DeliveryMethodRepository : IDeliveryMethodRepository, IDisposable
    {
        private readonly MarketDbContext _context;
  
        public DeliveryMethodRepository(MarketDbContext context)
        {
            _context = context;
        }  
        public IQueryable<DeliveryMethod> GetAllDeliveryMethodsAsync()  
        {  
            return _context.DeliveryMethods.AsNoTracking();  
        }
 
        public async Task<DeliveryMethod?> GetDeliveryMethodByIdAsync(Guid id) => await _context.DeliveryMethods.FindAsync(id);
        
        public async Task AddDeliveryMethod(DeliveryMethod entity)
        {
            _context.DeliveryMethods.Add(entity); 
            await _context.SaveChangesAsync();
        }
  
        public async Task UpdateDeliveryMethod(DeliveryMethod entity)
        {
            _context.DeliveryMethods.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task RemoveDeliveryMethod(DeliveryMethod entity)
        { 
            _context.DeliveryMethods.Remove(entity);
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

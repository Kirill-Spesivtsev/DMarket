using DMarket.Infrastructure.Abstractions;
using DMarket.Infrastructure.Data;
using DMarket.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly MarketDbContext _context;
        
        public IOrderRepository Orders { get; private set; }
        public IDeliveryMethodRepository DeliveryMethods { get; private set; }
        public IProductRepository Products { get; private set; }


        public UnitOfWork(MarketDbContext context)
        {
            _context = context;

            Orders = new OrderRepository(_context);
            DeliveryMethods = new DeliveryMethodRepository(_context);
            Products = new ProductRepository(_context);

        }
 
        public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            return await _context.SaveChangesAsync(cancellationToken);
        }

        public IDbTransaction BeginTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted)
        {
            var transaction = _context.Database.BeginTransaction();
            return transaction.GetDbTransaction();
        }

        private bool disposed;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}

using Microsoft.EntityFrameworkCore;
using System.Data;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IUnitOfWork
    {
        public IOrderRepository Orders { get; }
        public IDeliveryMethodRepository DeliveryMethods { get; }
        public IProductRepository Products { get; }

        public Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);

        public IDbTransaction BeginTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted);
    }
}
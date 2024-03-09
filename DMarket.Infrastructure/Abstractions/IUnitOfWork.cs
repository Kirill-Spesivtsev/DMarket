using Microsoft.EntityFrameworkCore;
using System.Data;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IUnitOfWork
    {
        public Task SaveChangesAsync(CancellationToken cancellationToken = default);

        public IDbTransaction BeginTransaction(IsolationLevel isolationLevel = IsolationLevel.ReadCommitted);
    }
}
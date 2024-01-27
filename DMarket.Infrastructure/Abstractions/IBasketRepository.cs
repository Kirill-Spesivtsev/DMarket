using DMarket.Core.Entities;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IBasketRepository
    {
        public Task<bool> DeleteBasketAsync(string basketId);

        public Task<CustomerBasket?> GetBasketAsync(string basketId);

        public Task<CustomerBasket?> UpdateBasketAsync(CustomerBasket basket);
    }
}
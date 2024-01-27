using System.Text.Json;
using DMarket.Core.Entities;
using DMarket.Infrastructure.Abstractions;
using StackExchange.Redis;

namespace DMarket.Infrastructure.Repositories
{
    public class BasketRepository : IBasketRepository
    {
        private readonly IDatabase _database;
        public BasketRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<bool> DeleteBasketAsync(string basketId)
        {
            return await _database.KeyDeleteAsync(basketId);
        }

        public async Task<CustomerBasket?> GetBasketAsync(string basketId)
        {
            var data = await _database.StringGetAsync(basketId);

            return data.IsNullOrEmpty ? null : JsonSerializer.Deserialize<CustomerBasket>(data!);
        }

        public async Task<CustomerBasket?> UpdateBasketAsync(CustomerBasket basket)
        {
            var created = await _database.StringSetAsync(basket.Id, 
                JsonSerializer.Serialize(basket), TimeSpan.FromDays(60));

            if (!created) 
            {
                return null!;
            }

            return await GetBasketAsync(basket.Id);
        }
    }
}
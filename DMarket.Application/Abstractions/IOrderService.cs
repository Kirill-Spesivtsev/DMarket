using DMarket.Core.Entities.Order;

namespace DMarket.Core.Interfaces
{
    public interface IOrderService
    {
        Task<Order> CreateOrderAsync(string buyerEmail, Guid deliveryMethodId, string basketId, DeliveryAddress shippingAddress);
        Task<List<Order>> GetOrdersForUserAsync(string buyerEmail);
        Task<Order?> GetOrderByIdAsync(Guid id, string buyerEmail);
        Task<List<DeliveryMethod>> GetDeliveryMethodsAsync();
    }
}
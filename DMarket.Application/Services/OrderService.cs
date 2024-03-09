using DMarket.Core.Entities;
using DMarket.Core.Entities.Order;
using DMarket.Core.Interfaces;
using DMarket.Core;
using DMarket.Infrastructure.Abstractions;
using DMarket.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DMarket.Infrastructure.Services
{
    public class OrderService : IOrderService
    {
        private readonly IBasketRepository _basketRepository;
        private readonly IUnitOfWork _unitOfWork;

        public OrderService(
            IBasketRepository basketRepository, 
            IUnitOfWork unitOfWork)
        {
            _basketRepository = basketRepository;
            _unitOfWork = unitOfWork;
        }
        
        public async Task<Order> CreateOrderAsync(
            string buyerEmail, Guid deliveryMethodId, 
            string basketId, DeliveryAddress shippingAddress)
        {
            var basket = await _basketRepository.GetBasketAsync(basketId);

            var items = new List<OrderItem>();
            foreach (var item in basket?.Items!)
            {
                var productItem = await _unitOfWork.Products.GetProductByIdAsync(Guid.Parse(item.Id));
                var itemOrdered = new ProductItemOrdered(productItem.Id, 
                    productItem.Name, productItem.ImageUrl);
                var orderItem = new OrderItem(itemOrdered, productItem.Price, item.Quantity);
                items.Add(orderItem);
            }

            var deliveryMethod = await _unitOfWork.DeliveryMethods
                .GetDeliveryMethodByIdAsync(deliveryMethodId);

            var subtotal = items.Sum(item => item.Price * item.Quantity);

            var order = new Order(items, buyerEmail, shippingAddress, deliveryMethod, subtotal);
            await _unitOfWork.Orders.AddOrder(order);

            var result = await _unitOfWork.SaveChangesAsync();

            if (result <= 0) return null!;

            await _basketRepository.DeleteBasketAsync(basketId);

            return order;
        }

        public async Task<List<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _unitOfWork.DeliveryMethods.GetAllDeliveryMethodsAsync().ToListAsync();
        }

        public async Task<Order?> GetOrderByIdAsync(Guid id, string buyerEmail)
        {
            return await _unitOfWork.Orders.GetOrderByIdAsync(id);
        }

        public async Task<List<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            return await _unitOfWork.Orders.GetFilteredOrdersAsync(
                    q => q.BuyerEmail == buyerEmail)
                .ToListAsync();
        }

    }
}
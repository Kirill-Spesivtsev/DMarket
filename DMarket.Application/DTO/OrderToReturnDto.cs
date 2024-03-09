using DMarket.Core.Entities.Order;

namespace DMarket.Application.Dto
{
    public class OrderToReturnDto
    {
        public Guid Id { get; set; }

        public string BuyerEmail { get; set; }

        public DateTime OrderDate { get; set; }

        public DeliveryAddress ShipToAddress { get; set; }

        public string DeliveryMethod { get; set; }

        public decimal ShippingPrice { get; set; }

        public IReadOnlyList<OrderItemDto> OrderItems { get; set; }

        public decimal Subtotal { get; set; }

        public decimal Total { get; set; }

        public string Status { get; set; }
    }
}
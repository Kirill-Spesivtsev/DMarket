namespace Core.Entities.Order
{
    public class Order
    {
        public Order()
        {
        }
        public Order(List<OrderItem> orderItems, string buyerEmail, DeliveryAddress shipToAddress, 
            DeliveryMethod deliveryMethod, decimal subtotal)
        {
            BuyerEmail = buyerEmail;
            ShipToAddress = shipToAddress;
            DeliveryMethod = deliveryMethod;
            OrderItems = orderItems;
            Subtotal = subtotal;
        }

        public Guid Id { get; set; } = Guid.NewGuid();
        public string BuyerEmail { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;
        public DeliveryAddress ShipToAddress { get; set; }
        public DeliveryMethod DeliveryMethod { get; set; }
        public List<OrderItem> OrderItems { get; set; }
        public decimal Subtotal { get; set; }
        public OrderStatus Status { get; set; } = OrderStatus.Pending;
        public string PaymentIntentId { get; set; }
        public decimal Total
        {
            get
            {
                return Subtotal + DeliveryMethod.Price;
            }
        }
    }
}
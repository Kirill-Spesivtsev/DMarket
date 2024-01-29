namespace Core.Entities.Order
{
    public class DeliveryMethod
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string ShortName { get; set; }
        public string DeliveryTime { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }
}
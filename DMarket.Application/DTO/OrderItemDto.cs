namespace DMarket.Application.Dto
{
    public class OrderItemDto
    {
        public Guid ProductId { get; set; }

        public string ProductName { get; set; }

        public string ImageUrl { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
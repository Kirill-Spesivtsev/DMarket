namespace Core.Entities.Order
{
    public class ProductItemOrdered
    {
        public ProductItemOrdered() {}

        public ProductItemOrdered(Guid productItemId, string productName, string imageUrl)
        {
            ProductItemId = productItemId;
            ProductName = productName;
            ImageUrl = imageUrl;
        }

        public Guid ProductItemId { get; set; }
        public string ProductName { get; set; }
        public string ImageUrl { get; set; }
    }
}
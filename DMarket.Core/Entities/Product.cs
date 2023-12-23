using System.Diagnostics.CodeAnalysis;

namespace DMarket.Core.Entities
{
    [SuppressMessage("", "CS8618")]
    public class Product
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }
        public ProductType ProductType { get; set; }
        public Guid ProductTypeId { get; set; }
        public ProductBrand ProductBrand { get; set; }
        public Guid ProductBrandId { get; set; }
    }
}

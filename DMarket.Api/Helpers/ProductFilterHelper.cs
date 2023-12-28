using DMarket.Core.Entities;

namespace DMarket.Api.Helpers
{
    public static class ProductFilterHelper
    {
        public static IQueryable<Product> FilterProducts(
            this IQueryable<Product> list,
            string? titleFilter,
            string? descriptionFilter,
            decimal? minPriceFilter,
            decimal? maxPriceFilter,
            string? brandIdFilter,
            string? typeIdFilter)
        {   
            if (!string.IsNullOrWhiteSpace(titleFilter))
            {
                list = list.Where(p => p.Name.Contains(titleFilter));
            }
            if (!string.IsNullOrWhiteSpace(descriptionFilter))
            {
                list = list.Where(p => p.Description.Contains(descriptionFilter));
            }
            if (minPriceFilter.HasValue)
            {
                list = list.Where(p => p.Price >= minPriceFilter.Value);
            }
            if (maxPriceFilter.HasValue)
            {
                list = list.Where(p => p.Price <= maxPriceFilter.Value);
            }
            if (!string.IsNullOrWhiteSpace(brandIdFilter))
            {
                list = list.Where(p => p.ProductBrandId.ToString().ToUpper() == brandIdFilter.ToUpper());
            }
            if (!string.IsNullOrWhiteSpace(typeIdFilter))
            {
                list = list.Where(p => p.ProductTypeId.ToString().ToUpper() == typeIdFilter.ToUpper());
            }
            return list;
        }

    }
}

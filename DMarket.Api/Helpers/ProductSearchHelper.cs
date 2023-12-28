using DMarket.Core.Entities;


namespace DMarket.Api.Helpers
{
    public static class ProductSearchHelper
    {
        public static IQueryable<Product> SearchProducts(this IQueryable<Product> list, string? searchString)
        {            
            if (!string.IsNullOrEmpty(searchString))
            {
                return list.Where( p => p.Name.Contains(searchString) 
                    || p.Description.Contains(searchString)
                    || p.CreatedTime.ToLocalTime().Date.ToString().Contains(searchString));
            }
            return list;
        }

    }
}

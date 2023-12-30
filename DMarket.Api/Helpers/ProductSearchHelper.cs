using DMarket.Core.Entities;


namespace DMarket.Api.Helpers
{
    public static class ProductSearchHelper
    {
        public static IQueryable<Product> SearchProducts(this IQueryable<Product> list, string? searchString)
        {            
            if (!string.IsNullOrEmpty(searchString))
            {
                searchString = searchString.ToUpper();

                return list.Where( p => p.Name.ToUpper().Contains(searchString) 
                    || p.Description.ToUpper().Contains(searchString)
                    || p.CreatedTime.ToString().ToUpper().Contains(searchString));
            }
            return list;
        }

    }
}

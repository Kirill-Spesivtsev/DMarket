using DMarket.Api.DTO;

namespace DMarket.Api.Helpers
{
    public static class PagingHelper
    {
        public static PagedResponse<T> GetListPage<T>(
            this IQueryable<T> list, int pageNumber, int pageSize, int totalCount)
        {
            return new PagedResponse<T>()
            {
                PageNumber = pageNumber >= 1 ? pageNumber : 1,
                PageSize = pageSize >= 1 ? pageSize : 20,
                TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize),
                HasPrevious = pageNumber > 1,
                HasNext = pageNumber < pageSize,
                TotalElements = list.Count(),
                Data = list.Skip((pageNumber - 1) * pageSize).Take(pageSize)
            };
        }
    }
}

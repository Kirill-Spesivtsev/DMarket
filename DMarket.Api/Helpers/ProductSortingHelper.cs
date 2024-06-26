﻿

using DMarket.Core.Entities;
using System.Linq.Expressions;

namespace DMarket.Api.Helpers
{

    public static class ProductSortingHelper
    {

        public static IQueryable<Product> SortProducts(this IQueryable<Product> list, string? sortKey, string? sortOrder)
        {            
            Expression<Func<Product, object>> sortKeyExpr = sortKey?.ToLower() switch
            {
                "id" => product => product.Id,
                "name" => product => product.Name,
                "description" => product => product.Description,
                "price" => product => product.Price,
                "created_time" => product => product.CreatedTime,
                _ => product => product.Name
            };

            if (sortOrder == "desc" || sortOrder == "descending")
            {
                return list.OrderByDescending(sortKeyExpr);
            }
            else
            {
                return list.OrderBy(sortKeyExpr);
            }
        }

    }
}

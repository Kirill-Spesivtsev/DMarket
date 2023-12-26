using DMarket.Core.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Abstractions
{
    public interface IProductRepository
    {
        public IQueryable<Product> GetAllProductsAsync();

        public IQueryable<ProductBrand> GetAllProductBrandsAsync();

        public IQueryable<ProductType> GetAllProductTypesAsync();

        public Task<Product?> GetProductByIdAsync(Guid id);

        public Task<int> CountProducts();

        public Task AddProduct(Product entity);

        public Task UpdateProduct(Product entity);

        public Task RemoveProduct(Product entity);

        public IQueryable<Product> GetFilteredProductsAsync(Expression<Func<Product, bool>> predicate);
    }
}

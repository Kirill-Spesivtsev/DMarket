﻿using DMarket.Core.Entities;
using DMarket.Infrastructure.Abstractions;
using DMarket.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DMarket.Infrastructure.Repositories
{
    public class ProductRepository : IProductRepository, IDisposable
    {
        private readonly MarketDbContext _context;
  
        public ProductRepository(MarketDbContext context)
        {
            _context = context;
        }  
        public IQueryable<Product> GetAllProductsAsync()  
        {  
            return _context.Products.AsQueryable();  
        }  

        public IQueryable<ProductBrand> GetAllProductBrandsAsync()
        {
            return _context.ProductBrands.AsQueryable();  
        }

        public IQueryable<ProductType> GetAllProductTypesAsync()
        {
            return _context.ProductTypes.AsQueryable();  
        }
  
        public async Task<Product?> GetProductByIdAsync(Guid id)
        {  
            return await _context.Products.FindAsync(id);
        }  

        public async Task AddProduct(Product entity)
        {
            _context.Products.Add(entity); 
            await _context.SaveChangesAsync();
        }
  
        public async Task UpdateProduct(Product entity)
        {
            _context.Products.Update(entity);
            await _context.SaveChangesAsync();
        } 

        public async Task RemoveProduct(Product entity)
        { 
            _context.Products.Remove(entity);  
            await _context.SaveChangesAsync();
        }                

        public IQueryable<Product> GetFilteredProductsAsync(Expression<Func<Product, bool>> predicate)
        {
            return _context.Products.Where(predicate).AsQueryable();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposed && disposing)
            {
                _context.Dispose();
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    
    }
}

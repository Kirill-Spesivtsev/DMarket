using DMarket.Core.Entities;
using DMarket.Infrastructure.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DmarketApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly IProductRepository _repo;

        public ProductsController(IProductRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var result = await Task.FromResult(_repo.GetAllProductsAsync());
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product?>> GetProduct(Guid id)
        {
            return await _repo.GetProductByIdAsync(id);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var result = await Task.FromResult(_repo.GetAllProductBrandsAsync());
            return Ok(result);
        }

        [HttpGet("types")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductTypes()
        {
            var result = await Task.FromResult(_repo.GetAllProductTypesAsync());
            return Ok(result);
        }
    }
}

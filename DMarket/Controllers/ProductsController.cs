using AutoMapper;
using DMarket.Api.DTO;
using DMarket.Core.Entities;
using DMarket.Core.Exceptions;
using DMarket.Infrastructure.Abstractions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductMicroservice.Domain.Exceptions;

namespace DmarketApi.Controllers
{
    [Route("api/v1/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {

        private readonly IProductRepository _repository;
        private readonly IMapper _mapper;

        public ProductsController(IProductRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> GetProducts()
        {
            var products = await _repository.GetAllProductsAsync().ToListAsync();
            var result = products.Select(product => _mapper.Map<Product, ProductDto>(product));
            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProduct(Guid id)
        {
            var product = await _repository.GetProductByIdAsync(id);
            if (product == null)
            {
                throw new ProductNotFoundException(id.ToString());
            }

            return Ok(_mapper.Map<Product, ProductDto>(product));
        }

        [HttpGet("brands")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductBrands()
        {
            var brands = await _repository.GetAllProductBrandsAsync().ToListAsync();
            return Ok(brands);
        }

        [HttpGet("types")]
        public async Task<ActionResult<List<ProductBrand>>> GetProductTypes()
        {
            var types = await _repository.GetAllProductTypesAsync().ToListAsync();
            return Ok(types);
        }
    }
}

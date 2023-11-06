using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public string GetProduct()
        {
            return String.Empty;
        }

        [HttpGet("{id}")]
        public string GetProduct(int id)
        {
            return String.Empty;
        }
    }
}

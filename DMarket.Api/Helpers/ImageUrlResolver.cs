using AutoMapper;
using DMarket.Api.DTO;
using DMarket.Core.Entities;

namespace DMarket.Api.Helpers
{

    public class ImageUrlResolver : IValueResolver<Product, ProductDto, string>
    {
        private readonly IConfiguration _config;
        public ImageUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Product source, ProductDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ImageUrl))
            {
                return _config["ApiHostUrl"] + source.ImageUrl;
            }
            return null!;
        }

    }
}

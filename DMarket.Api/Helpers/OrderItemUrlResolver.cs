using AutoMapper;
using DMarket.Api.DTO;
using DMarket.Application.Dto;
using DMarket.Core.Entities;
using DMarket.Core.Entities.Order;

namespace DMarket.Api.Helpers
{

    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDto, string>
    {
        private readonly IConfiguration _config;
        public OrderItemUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(OrderItem source, OrderItemDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.ImageUrl))
            {
                return _config["ApiHostUrl"] + source.ItemOrdered.ImageUrl;
            }
            return null!;
        }

    }
}

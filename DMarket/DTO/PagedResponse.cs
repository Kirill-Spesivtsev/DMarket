﻿using System.Collections;
using System.Linq.Expressions;

namespace DMarket.Api.DTO
{
    public class PagedResponse<T>
    {
        public int PageNumber { get; set; }

        public int PageSize { get; set; }

        public int TotalElements { get; set; }

        public int TotalPages { get; set; }

        public bool HasPrevious { get; set; }

        public bool HasNext { get; set; }

        public IEnumerable<T> Data { get; set; }

    }
}

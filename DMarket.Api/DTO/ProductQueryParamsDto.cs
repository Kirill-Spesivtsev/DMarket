namespace DMarket.Api.DTO
{
    public record ProductQueryParamsDto
    {
        public int PageNumber { get;set; } = 1;
        public int PageSize { get;set; } = 20;
        public string? SearchString { get;set; } = null!;
        public string? TitleFilter { get;set; } = null!;
        public string? DescriptionFilter { get;set; } = null!;
        public decimal? MinPriceFilter { get;set; } = null!;
        public decimal? MaxPriceFilter { get;set; } = null!;
        public string? SortKey { get;set; } = "id"; 
        public string? SortOrder  { get;set; } = "asc";
        public string? BrandIdFilter { get;set; } = null;
        public string? TypeIdFilter { get;set; } = null;

    }
}

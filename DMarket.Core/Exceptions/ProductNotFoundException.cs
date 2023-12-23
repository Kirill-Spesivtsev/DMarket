namespace DMarket.Core.Exceptions
{
    public class ProductNotFoundException : NotFoundException
    {
        public ProductNotFoundException(string id)
            : base($"Product with the identifier {id} was not found.")    
        {
        }
    }
}

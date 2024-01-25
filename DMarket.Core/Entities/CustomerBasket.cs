namespace DMarket.Core.Entities
{
    public class CustomerBasket
    {
        public CustomerBasket(){}
        public CustomerBasket(string id)
        {
            Id = id;
        }

        public string Id { get;set; }

        public virtual List<BasketItem> Items{ get;set; } = new();
    }
}
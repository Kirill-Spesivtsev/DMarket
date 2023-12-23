namespace DMarket.Core.Exceptions
{
    public abstract class CustomClientException : Exception 
    { 
        protected CustomClientException(string message) : base (message){ }

        public int Status { get; init; }

        public string Title { get; init; }

        public string Type { get; init; }
    }
}

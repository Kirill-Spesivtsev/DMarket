using System.Net;


namespace DMarket.Core.Exceptions
{
    public class NotFoundException : CustomClientException
    {
        public NotFoundException(string message) : base(message)
        {
            Status = (int)HttpStatusCode.NotFound;
            Title = "Not Found";
            Type = @"https://tools.ietf.org/html/rfc7231#section-6.5.4";
        }
    }
}

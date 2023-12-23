using System.Net;

namespace DMarket.Core.Exceptions
{
    public class BadRequestException : CustomClientException
    {
        public BadRequestException(string message) : base(message)
        {
            Status = (int)HttpStatusCode.BadRequest;
            Title = "Bad Request";
            Type = @"https://tools.ietf.org/html/rfc7231#section-6.5.1";
        }


    }
}

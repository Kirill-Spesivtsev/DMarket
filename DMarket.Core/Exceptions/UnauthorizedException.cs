using DMarket.Core.Exceptions;
using System.Net;

namespace DMarket.Core.Exceptions
{
    public class UnauthorizedException : CustomClientException
    {
        public UnauthorizedException(string message) : base(message)
        {
            Status = (int)HttpStatusCode.Unauthorized;
            Title = "Unauthorized";
            Type = @"https://datatracker.ietf.org/doc/html/rfc7235#section-3.1";
        }

        public UnauthorizedException() 
            : this($"This action requires authentication. Please login to your account first"){}
    }
}


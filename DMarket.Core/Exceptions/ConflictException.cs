using System.Net;


namespace DMarket.Core.Exceptions
{
    public class ConflictException : CustomClientException
    {
        public ConflictException(string message) : base(message)
        {
            Status = (int)HttpStatusCode.Conflict;
            Title = "Conflict";
            Type = @"https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8";
        }

        public ConflictException(Guid id) : this($"Product with id: {id} already exists"){}
    }
}


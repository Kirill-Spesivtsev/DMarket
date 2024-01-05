using DMarket.Core.Entities;
using DMarket.Core.Entities.Identity;
using FluentValidation;

namespace DMarket.Api.Validators
{
    public class AddressValidator : AbstractValidator<Address>
    {
        public AddressValidator() 
        {
            RuleFor(model => model.FirstName)
                .NotEmpty().WithMessage("First Name should not be empty");
            RuleFor(model => model.LastName)
                .NotEmpty().WithMessage("First Name should not be empty");
            RuleFor(model => model.Street)
                .NotEmpty().WithMessage("Street should not be empty");
            RuleFor(model => model.City)
                .NotEmpty().WithMessage("City should not be empty");
            RuleFor(model => model.State)
                .NotEmpty().WithMessage("State should not be empty");
            RuleFor(model => model.ZipCode)
                .NotEmpty().WithMessage("Zip Code should not be empty");
        }
    
    }
}

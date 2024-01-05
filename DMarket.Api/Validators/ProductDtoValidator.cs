using DMarket.Api.DTO;
using DMarket.Core.Entities;
using FluentValidation;

namespace DMarket.Api.Validators
{
    public class ProductDtoValidator : AbstractValidator<ProductDto>
    {
        public ProductDtoValidator() 
        {
            RuleFor(model => model.Name)
                .NotEmpty().WithMessage("Name should not be empty")
                .MaximumLength(200).WithMessage("Title should not be longer than 200 symbols");
            RuleFor(model => model.Description)
                .NotNull().WithMessage("Description should not be empty")
                .MaximumLength(2000).WithMessage("Description should not be longer than 2000 symbols");
            RuleFor(model => model.Price)
                .GreaterThanOrEqualTo(decimal.Zero).WithMessage("Price should not be negative");
        }
    }
}

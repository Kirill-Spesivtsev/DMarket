using DMarket.Api.DTO;
using FluentValidation;

namespace DMarket.Api.Validators
{
    public class RegisterDtoValidator : AbstractValidator<RegisterDto>
    {
        public RegisterDtoValidator()
        {
            RuleFor(model => model.DisplayName)
                .NotEmpty().WithMessage("Name should not be empty")
                .MaximumLength(50).WithMessage("Name should not be longer than 50 symbols");
            RuleFor(model => model.Email)
                .NotEmpty().WithMessage("Email should not be empty")
                .Matches(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$")
                    .WithMessage("Please provide a valid email");
            RuleFor(model => model.Password)
                .MinimumLength(6)
                .WithMessage("Password should be at least 6 symbols");
        }
    }
}

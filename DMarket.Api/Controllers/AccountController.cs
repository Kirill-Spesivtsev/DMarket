using AutoMapper;
using DMarket.Api.DTO;
using DMarket.Application.Abstractions;
using DMarket.Core.Entities.Identity;
using DMarket.Core.Exceptions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace DMarket.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;
        public AccountController(
            UserManager<ApplicationUser> userManager, 
            SignInManager<ApplicationUser> signInManager,
            ITokenService tokenService, IMapper mapper)
        {
            _mapper = mapper;
            _tokenService = tokenService;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null)
            {
                throw new NotFoundException("User with such email does not exist");
            }

            var login = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!login.Succeeded)
            {
                throw new UnauthorizedException("Invalid login credentials");
            }

            var result = new UserDto
            {
                Email = user.Email,
                Token = _tokenService.GenerateToken(user),
                DisplayName = user.DisplayName
            };

            return Ok(result);
        }

        [HttpPost("register")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            var user = new ApplicationUser
            {
                DisplayName = registerDto.DisplayName,
                Email = registerDto.Email,
                UserName = registerDto.Email
            };

            var userCheck = await _userManager.FindByEmailAsync(registerDto.Email);

            if (userCheck != null)
            {
                throw new ConflictException("User with such email already exists");
            }

            var register = await _userManager.CreateAsync(user, registerDto.Password);

            if (!register.Succeeded) 
            { 
                throw new BadRequestException("Invalid parameters provided");
            } 

            var result = new UserDto
            {
                DisplayName = user.DisplayName,
                Token = _tokenService.GenerateToken(user),
                Email = user.Email
            };

            return Ok(result);
        }

    }
}

using AutoMapper;
using BL = BusinessLogic.ModelsDTO;
using API = AngularApp.Models;

namespace AngularApp.Profiles
{
    public class WebApiProfile : Profile
    {
        public WebApiProfile()
        {
            CreateMap<BL.Product, API.Product>().ReverseMap();
            CreateMap<BL.Order, API.Order>().ReverseMap();
            CreateMap<BL.OrderLine, API.OrderLine>().ReverseMap();
            CreateMap<BL.CartLine, API.CartLine>().ReverseMap();            
            CreateMap<BL.User, API.User>().ReverseMap();                     
        }
    }
}


using AutoMapper;
using BL = BusinessLogic.ModelsDTO;
using DA = DataAccess.Models;

namespace BusinessLogic.Services.Profiles
{
    public class BusinessLogicProfile : Profile
    {
        public BusinessLogicProfile()
        {
            CreateMap<BL.Product, DA.Product>().ReverseMap();
            CreateMap<BL.Order, DA.Order>().ReverseMap();
            CreateMap<BL.OrderLine, DA.OrderLine>().ReverseMap();
            CreateMap<BL.CartLine, DA.CartLine>().ReverseMap();            
            CreateMap<BL.User, DA.User>().ReverseMap();                     
        }
    }
}


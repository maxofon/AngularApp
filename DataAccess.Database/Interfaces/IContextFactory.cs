using System;

namespace DataAccess.Database.Interfaces
{
    public interface IContextFactory : IDisposable
    {
        IProductContext GetProductContext();
    }
}

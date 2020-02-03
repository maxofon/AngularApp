using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;

namespace DataAccess.Database.Interfaces
{
    public interface IDbContext : IDisposable
    {
        int SaveChanges();

        EntityEntry Entry(object entity);
    }
}

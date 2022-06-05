using Microsoft.EntityFrameworkCore;
using PartyStanyLukac.Models;

namespace PartyStanyLukac.Data
{
    public class ApplicationDbContext: DbContext
    {
        public DbSet<Product> Products { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }
    }
}

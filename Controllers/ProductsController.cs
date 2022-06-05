using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PartyStanyLukac.Data;
using PartyStanyLukac.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PartyStanyLukac.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }
    }
}

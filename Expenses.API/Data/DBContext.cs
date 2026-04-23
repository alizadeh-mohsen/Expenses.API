using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Expenses.API.Models;

namespace Expenses.API.Data
{
    public class DBContext : DbContext
    {
        public DBContext (DbContextOptions<DBContext> options)
            : base(options)
        {
        }

        public DbSet<Expenses.API.Models.User> User { get; set; } = default!;
        public DbSet<Expenses.API.Models.Transaction> Transaction { get; set; } = default!;
    }
}

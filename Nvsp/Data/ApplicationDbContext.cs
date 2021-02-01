using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Nvsp.Models;

namespace Nvsp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Voter> Voters { get; set; }
        public DbSet<PersonalDetail> PersonalDetails { get; set; }
        public DbSet<Constituency> Constituency { get; set; }
        public DbSet<EpicNumber> EpicNumber { get; set; }

    }
}

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Nvsp.Models
{
	public class Voter : IdentityUser
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Mobile { get; set; }
		public bool HaveEPICNumber { get; set; }

		[ForeignKey("EpicNumberId")]
		public EpicNumber EpicNumber { get; set; }
		public string EpicNumberId { get; set; }
	}
}

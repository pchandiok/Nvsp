using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Nvsp.Models
{
    	public enum Gender
    	{
        	Male,
	        Female,
        	Others
	}

    	public enum DifferentlyAbled
    	{
        	VisualImpairement,
        	SpeechAndHearingdisability,
		LocomotorDisability,
		Other
    	}
	
	public class Voter : IdentityUser
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Mobile { get; set; }
		public bool HaveEPICNumber { get; set; }

        	public string EPICNumber { get; set; }
		public string HouseNo { get; set; }
		public string StreetAreaLocality { get; set; }
		public string TownVillage { get; set; }
		public string PostOffice { get; set; }
		public int PinCode { get; set; }
		
		[ForeignKey("ConstituencyId")]
		public Constituency Constituency { get; set; }
		public int ConstituencyId { get; set; }

		public DateTime ResidentSince { get; set; }

        	public string Name { get; set; }
		public string Surname { get; set; }
		public Gender Gender  {get; set; } 
        	public DateTime DateOfBirth { get; set; }
		public string PlaceOfBirth { get; set; }
		public string TypeOfRelation { get; set; }
		public string NameOfRelative { get; set; }
		public string SurnameOfRelative { get; set; }
		public DifferentlyAbled? DifferentlyAbled { get; set; }

	}
}

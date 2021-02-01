using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nvsp.Models
{
    public class EpicNumber
    {
		[Key]
        public int EpicNumberId { get; set; }
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

		[ForeignKey("PersonalId")]
		public PersonalDetail PersonalDetails { get; set; }
		public int PersonalId { get; set; }
    }
}
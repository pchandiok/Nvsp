using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nvsp.Models
{
    public class EpicNumber
    {
        // public int Id { get; set; }
        public string EpicNumberId { get; set; }

		public string HouseNo { get; set; }
		public string StreetAreaLocality { get; set; }
		public string TownVillage { get; set; }
		public string PostOffice { get; set; }
		public int PinCode { get; set; }

        [ForeignKey("BirthId")]
        public BirthPlace BirthPlace { get; set; }
        public int BirthId { get; set; }

		[ForeignKey("ConstituencyId")]
		public Constituency Constituency { get; set; }
		public int ConstituencyId { get; set; }

		public DateTime ResidentSince { get; set; }
    }
}
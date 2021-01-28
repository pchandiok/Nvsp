using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nvsp.Models
{
    public class BirthPlace
    {
        public int BirthId { get; set; }
        public DateTime DateOfBirth { get; set; }
		public string TownVillage { get; set; }
		
        [ForeignKey("ConstituencyId")]
        public Constituency Constituency { get; set; }
        public int ConstituencyId { get; set; }
    }
}
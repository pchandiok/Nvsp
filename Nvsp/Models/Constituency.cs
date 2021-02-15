using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nvsp.Models
{
    public class Constituency
    {
        [Key]
        public int ConstituencyId { get; set; }
        public string ConstituencyName { get; set; }

	public string StateUT { get; set; }
	public string District { get; set; }
    }
}

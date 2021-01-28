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
    public class PersonalDetails
    {
        public int PersonalId { get; set; }
        public string Name { get; set; }
		public string Surname { get; set; }
		public Gender Gender  {get; set; } 

		public string TypeOfRelation { get; set; }
		public string NameOfRelative { get; set; }
		public string SurnameOfRelative { get; set; }
    
        // AdditionalInformation
		public DifferentlyAbled? DifferentlyAbled { get; set; }
		
		public string Email { get; set; }
		public string Mobile { get; set; }
    }
}
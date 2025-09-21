namespace StudentManagementAPI.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseName { get; set; }
        public string Description { get; set; }
        public int DurationInMonths { get; set; }
        public decimal Fees { get; set; }
        public string Status { get; set; }
    }
}

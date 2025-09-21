namespace StudentManagementAPI.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Address { get; set; }
        public string? PhotoPath { get; set; }
        public string Status { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}

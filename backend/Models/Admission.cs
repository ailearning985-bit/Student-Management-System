namespace StudentManagementAPI.Models
{
    public class Admission
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public DateTime AdmissionDate { get; set; }
        public decimal TotalFees { get; set; }
        public decimal PaidFees { get; set; }
        public string Status { get; set; }
    }
}

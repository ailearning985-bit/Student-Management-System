namespace StudentManagementAPI.Models
{
    public class FeeTransaction
    {
        public int Id { get; set; }
        public int AdmissionId { get; set; }
        public DateTime PaymentDate { get; set; }
        public decimal Amount { get; set; }
        public string PaymentMode { get; set; }
        public string? Remarks { get; set; }
    }
}

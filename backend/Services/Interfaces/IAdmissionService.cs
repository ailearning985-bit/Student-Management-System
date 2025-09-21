using StudentManagementAPI.Models;

namespace StudentManagementAPI.Services.Interfaces
{
    public interface IAdmissionService
    {
        Task<IEnumerable<Admission>> GetAllAdmissionsAsync();
        Task<Admission?> GetAdmissionByIdAsync(int id);
        Task AddAdmissionAsync(Admission admission);
        Task UpdateAdmissionAsync(Admission admission);
        Task DeleteAdmissionAsync(int id);
    }
}

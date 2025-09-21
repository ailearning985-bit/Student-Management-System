using StudentManagementAPI.Models;

namespace StudentManagementAPI.Repositories.Interfaces
{
    public interface IAdmissionRepository
    {
        Task<IEnumerable<Admission>> GetAllAsync();
        Task<Admission?> GetByIdAsync(int id);
        Task AddAsync(Admission admission);
        Task UpdateAsync(Admission admission);
        Task DeleteAsync(int id);
    }
}

using StudentManagementAPI.Models;

namespace StudentManagementAPI.Repositories.Interfaces
{
    public interface IFeeTransactionRepository
    {
        Task<IEnumerable<FeeTransaction>> GetAllAsync();
        Task<FeeTransaction?> GetByIdAsync(int id);
        Task AddAsync(FeeTransaction transaction);
        Task UpdateAsync(FeeTransaction transaction);
        Task DeleteAsync(int id);
    }
}

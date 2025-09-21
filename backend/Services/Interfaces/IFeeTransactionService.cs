using StudentManagementAPI.Models;

namespace StudentManagementAPI.Services.Interfaces
{
    public interface IFeeTransactionService
    {
        Task<IEnumerable<FeeTransaction>> GetAllTransactionsAsync();
        Task<FeeTransaction?> GetTransactionByIdAsync(int id);
        Task AddTransactionAsync(FeeTransaction transaction);
        Task UpdateTransactionAsync(FeeTransaction transaction);
        Task DeleteTransactionAsync(int id);
    }
}

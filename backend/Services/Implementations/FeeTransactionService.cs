using StudentManagementAPI.Models;
using StudentManagementAPI.Repositories.Interfaces;
using StudentManagementAPI.Services.Interfaces;

namespace StudentManagementAPI.Services.Implementations
{
    public class FeeTransactionService : IFeeTransactionService
    {
        private readonly IFeeTransactionRepository _transactionRepository;

        public FeeTransactionService(IFeeTransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        public async Task<IEnumerable<FeeTransaction>> GetAllTransactionsAsync()
        {
            return await _transactionRepository.GetAllAsync();
        }

        public async Task<FeeTransaction?> GetTransactionByIdAsync(int id)
        {
            return await _transactionRepository.GetByIdAsync(id);
        }

        public async Task AddTransactionAsync(FeeTransaction transaction)
        {
            await _transactionRepository.AddAsync(transaction);
        }

        public async Task UpdateTransactionAsync(FeeTransaction transaction)
        {
            await _transactionRepository.UpdateAsync(transaction);
        }

        public async Task DeleteTransactionAsync(int id)
        {
            await _transactionRepository.DeleteAsync(id);
        }
    }
}

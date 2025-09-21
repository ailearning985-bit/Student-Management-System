using Microsoft.EntityFrameworkCore;
using StudentManagementAPI.Models;
using StudentManagementAPI.Repositories.Interfaces;
using System;

namespace StudentManagementAPI.Repositories.Implementations
{
    public class FeeTransactionRepository : IFeeTransactionRepository
    {
        private readonly ApplicationDbContext _context;

        public FeeTransactionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<FeeTransaction>> GetAllAsync()
        {
            return await _context.FeeTransactions.ToListAsync();
        }

        public async Task<FeeTransaction?> GetByIdAsync(int id)
        {
            return await _context.FeeTransactions.FindAsync(id);
        }

        public async Task AddAsync(FeeTransaction transaction)
        {
            _context.FeeTransactions.Add(transaction);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(FeeTransaction transaction)
        {
            _context.Entry(transaction).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var transaction = await _context.FeeTransactions.FindAsync(id);
            if (transaction != null)
            {
                _context.FeeTransactions.Remove(transaction);
                await _context.SaveChangesAsync();
            }
        }
    }
}

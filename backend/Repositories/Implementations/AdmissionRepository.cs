using Microsoft.EntityFrameworkCore;
using StudentManagementAPI.Models;
using StudentManagementAPI.Repositories.Interfaces;
using System;

namespace StudentManagementAPI.Repositories.Implementations
{
    public class AdmissionRepository : IAdmissionRepository
    {
        private readonly ApplicationDbContext _context;

        public AdmissionRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Admission>> GetAllAsync()
        {
            return await _context.Admissions.ToListAsync();
        }

        public async Task<Admission?> GetByIdAsync(int id)
        {
            return await _context.Admissions.FindAsync(id);
        }

        public async Task AddAsync(Admission admission)
        {
            _context.Admissions.Add(admission);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Admission admission)
        {
            _context.Entry(admission).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var admission = await _context.Admissions.FindAsync(id);
            if (admission != null)
            {
                _context.Admissions.Remove(admission);
                await _context.SaveChangesAsync();
            }
        }
    }
}

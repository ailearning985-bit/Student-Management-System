using StudentManagementAPI.Models;
using StudentManagementAPI.Repositories.Interfaces;
using StudentManagementAPI.Services.Interfaces;

namespace StudentManagementAPI.Services.Implementations
{
    public class AdmissionService : IAdmissionService
    {
        private readonly IAdmissionRepository _admissionRepository;

        public AdmissionService(IAdmissionRepository admissionRepository)
        {
            _admissionRepository = admissionRepository;
        }

        public async Task<IEnumerable<Admission>> GetAllAdmissionsAsync()
        {
            return await _admissionRepository.GetAllAsync();
        }

        public async Task<Admission?> GetAdmissionByIdAsync(int id)
        {
            return await _admissionRepository.GetByIdAsync(id);
        }

        public async Task AddAdmissionAsync(Admission admission)
        {
            await _admissionRepository.AddAsync(admission);
        }

        public async Task UpdateAdmissionAsync(Admission admission)
        {
            await _admissionRepository.UpdateAsync(admission);
        }

        public async Task DeleteAdmissionAsync(int id)
        {
            await _admissionRepository.DeleteAsync(id);
        }
    }   
}

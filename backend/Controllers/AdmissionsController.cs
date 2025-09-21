using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentManagementAPI.Models;
using StudentManagementAPI.Services.Interfaces;

namespace StudentManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdmissionsController : ControllerBase
    {
        private readonly IAdmissionService _admissionService;

        public AdmissionsController(IAdmissionService admissionService)
        {
            _admissionService = admissionService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admission>>> GetAdmissions()
        {
            var admissions = await _admissionService.GetAllAdmissionsAsync();
            return Ok(admissions);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Admission>> GetAdmission(int id)
        {
            var admission = await _admissionService.GetAdmissionByIdAsync(id);
            if (admission == null)
                return NotFound();

            return Ok(admission);
        }

        [HttpPost]
        public async Task<ActionResult<Admission>> CreateAdmission(Admission admission)
        {
            await _admissionService.AddAdmissionAsync(admission);
            return Ok(admission);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdmission(int id, Admission admission)
        {
            if (id != admission.Id)
                return BadRequest();

            await _admissionService.UpdateAdmissionAsync(admission);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmission(int id)
        {
            await _admissionService.DeleteAdmissionAsync(id);
            return NoContent();
        }
    }
}

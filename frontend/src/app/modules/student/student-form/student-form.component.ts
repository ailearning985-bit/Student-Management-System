import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent implements OnInit {
  studentForm!: FormGroup;
  id: number | null = null;

  constructor(private fb: FormBuilder, private studentService: StudentService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      address: [''],
      dateOfBirth: ['', Validators.required],
      status: ['Active']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadStudent();
  }

 loadStudent() {
  this.studentService.getById(this.id!).subscribe(student => {
    this.studentForm.patchValue({
      ...student,
      dateOfBirth: student.dateOfBirth ? new Date(student.dateOfBirth) : '' // convert string -> Date
    });
  });
}

  save() {
  if (this.studentForm.invalid) return;

  const formValue = this.studentForm.value;

  // Build payload matching backend C# model (PascalCase)
  const payload = {
    Id: this.id ?? 0,  // required for PUT
    FullName: formValue.fullName,
    Email: formValue.email,
    MobileNumber: formValue.mobileNumber,
    Address: formValue.address,
    DateOfBirth: formValue.dateOfBirth instanceof Date
  ? this.formatDateOnly(formValue.dateOfBirth)
  : formValue.dateOfBirth,
    Status: formValue.status,
    PhotoPath: null, // optional field (can adjust later)
    CreatedDate: new Date().toISOString() // or keep server-side default
  };

  if (this.id) {
    this.studentService.update(this.id, payload)
      .subscribe(() => this.router.navigate(['/students']));
  } else {
    this.studentService.add(payload)
      .subscribe(() => this.router.navigate(['/students']));
  }
}

 formatDateOnly(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

}

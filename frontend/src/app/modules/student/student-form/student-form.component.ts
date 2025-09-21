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
      this.studentForm.patchValue(student);
    });
  }

  save() {
    if (this.studentForm.invalid) return;
    if (this.id) {
      this.studentService.update(this.id, this.studentForm.value).subscribe(() => this.router.navigate(['/students']));
    } else {
      this.studentService.add(this.studentForm.value).subscribe(() => this.router.navigate(['/students']));
    }
  }
}

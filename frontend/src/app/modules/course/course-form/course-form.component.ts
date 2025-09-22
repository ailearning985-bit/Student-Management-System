import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-form',
  standalone: false,
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss'
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      courseFee: ['', Validators.required],
      durationInMonths: ['', Validators.required],
      description: [''],
      status: ['Active', Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.loadCourse();
    }
  }

  loadCourse() {
  this.courseService.getById(this.id!).subscribe(course => {
    this.courseForm.patchValue({
      courseName: course.courseName,
      courseFee: course.fees ?? course.courseFee,   // map backend field to form
      durationInMonths: course.durationInMonths,
      description: course.description,
      status: course.status
    });
  });
}

  save() {
  if (this.courseForm.invalid) return;

  const formValue = this.courseForm.value;

  // map to backend model
  const payload = {
    id: this.id,
    courseName: formValue.courseName,
    fees: formValue.courseFee,   // map to backend field
    durationInMonths: formValue.durationInMonths,
    description: formValue.description,
    status: formValue.status
  };

  if (this.id) {
    this.courseService.update(this.id, payload)
      .subscribe(() => this.router.navigate(['/courses']));
  } else {
    this.courseService.add(payload)
      .subscribe(() => this.router.navigate(['/courses']));
  }
}
}

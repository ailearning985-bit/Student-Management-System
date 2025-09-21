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

  constructor(private fb: FormBuilder, private courseService: CourseService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      description: [''],
      durationInMonths: ['', Validators.required],
      fees: ['', Validators.required],
      status: ['Active']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadCourse();
  }

  loadCourse() {
    this.courseService.getById(this.id!).subscribe(course => {
      this.courseForm.patchValue(course);
    });
  }

  save() {
    if (this.courseForm.invalid) return;
    if (this.id) {
      this.courseService.update(this.id, this.courseForm.value).subscribe(() => this.router.navigate(['/courses']));
    } else {
      this.courseService.add(this.courseForm.value).subscribe(() => this.router.navigate(['/courses']));
    }
  }
}

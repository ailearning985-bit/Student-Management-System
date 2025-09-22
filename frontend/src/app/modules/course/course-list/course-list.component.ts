import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  standalone: false,
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  courses: any[] = [];
  displayedColumns: string[] = [
    'courseName',
    'courseFee',
    'durationInMonths',
    'description',
    'status',
    'actions'
  ];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.getAll().subscribe(data => {
      this.courses = data.map((course: any) => ({
        ...course,
        courseFee: course.fees   // map backend field → frontend
      }));
    });
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure to delete this course?')) {
      this.courseService.delete(id).subscribe(() => this.loadCourses());
    }
  }
}

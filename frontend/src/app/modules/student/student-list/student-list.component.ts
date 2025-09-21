import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: number) {
    if (confirm('Are you sure to delete this student?')) {
      this.studentService.delete(id).subscribe(() => this.loadStudents());
    }
  }
}

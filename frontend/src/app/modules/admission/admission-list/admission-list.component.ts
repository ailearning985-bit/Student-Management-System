import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-admission-list',
  standalone: false,
  templateUrl: './admission-list.component.html',
  styleUrl: './admission-list.component.scss'
})
export class AdmissionListComponent implements OnInit {
  admissions: any[] = [];

  constructor(private admissionService: AdmissionService) {}

  ngOnInit(): void {
    this.loadAdmissions();
  }

  loadAdmissions() {
    this.admissionService.getAll().subscribe(data => {
      this.admissions = data;
    });
  }

  deleteAdmission(id: number) {
    if (confirm('Are you sure to delete this admission?')) {
      this.admissionService.delete(id).subscribe(() => this.loadAdmissions());
    }
  }
}

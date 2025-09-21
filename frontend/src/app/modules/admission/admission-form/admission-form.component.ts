import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdmissionService } from '../admission.service';

@Component({
  selector: 'app-admission-form',
  standalone: false,
  templateUrl: './admission-form.component.html',
  styleUrl: './admission-form.component.scss'
})
export class AdmissionFormComponent implements OnInit {
  admissionForm!: FormGroup;
  id: number | null = null;

  constructor(private fb: FormBuilder, private admissionService: AdmissionService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      studentId: ['', Validators.required],
      courseId: ['', Validators.required],
      admissionDate: ['', Validators.required],
      totalFees: ['', Validators.required],
      paidFees: ['', Validators.required],
      status: ['Active']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadAdmission();
  }

  loadAdmission() {
    this.admissionService.getById(this.id!).subscribe(admission => {
      this.admissionForm.patchValue(admission);
    });
  }

  save() {
    if (this.admissionForm.invalid) return;
    if (this.id) {
      this.admissionService.update(this.id, this.admissionForm.value).subscribe(() => this.router.navigate(['/admissions']));
    } else {
      this.admissionService.add(this.admissionForm.value).subscribe(() => this.router.navigate(['/admissions']));
    }
  }
}

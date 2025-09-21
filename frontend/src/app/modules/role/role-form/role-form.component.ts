import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-form',
  standalone: false,
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.scss'
})
export class RoleFormComponent implements OnInit {
  roleForm!: FormGroup;
  id: number | null = null;

  constructor(private fb: FormBuilder, private roleService: RoleService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.roleForm = this.fb.group({
      roleName: ['', Validators.required],
      description: ['']
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadRole();
  }

  loadRole() {
    this.roleService.getById(this.id!).subscribe(role => {
      this.roleForm.patchValue(role);
    });
  }

  save() {
    if (this.roleForm.invalid) return;
    if (this.id) {
      this.roleService.update(this.id, this.roleForm.value).subscribe(() => this.router.navigate(['/roles']));
    } else {
      this.roleService.add(this.roleForm.value).subscribe(() => this.router.navigate(['/roles']));
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { RoleService } from '../../role/role.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string = '';
  hide = true;
  roles: any[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,private roleService: RoleService,private snackBar: MatSnackBar) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', Validators.required],
      roleId: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

    ngOnInit() {
    this.loadRoles();
  }

  submit() {
    if (this.registerForm.invalid || this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.error = 'Form is invalid or passwords do not match';
      return;
    }

    const { username, email, mobileNumber, roleId, password } = this.registerForm.value;
    const passwordHash = this.registerForm.value.password;
    const user = { username,passwordHash, email, mobileNumber, roleId };

    this.authService.register(user, password).subscribe({
      next: () => {
        this.snackBar.open('User registered successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.error = 'Registration failed';
      }
    });
  }

   loadRoles() {
    this.roleService.getAll().subscribe({
      next: (data) => this.roles = data,
      error: (err) => {
        console.error('Failed to load roles', err);
        this.roles = [];
      }
    });
  }
}

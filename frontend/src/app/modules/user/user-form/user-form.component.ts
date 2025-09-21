import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup;
  id: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService,
              private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      passwordHash: [''],
      roleId: ['', Validators.required],
      isActive: [true]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) this.loadUser();
  }

  loadUser() {
    this.userService.getById(this.id!).subscribe(user => {
      this.userForm.patchValue(user);
    });
  }

  save() {
    if (this.userForm.invalid) return;
    if (this.id) {
      this.userService.update(this.id, this.userForm.value).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.register(this.userForm.value).subscribe(() => this.router.navigate(['/users']));
    }
  }
}

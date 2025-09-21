import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  standalone: false,
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.scss'
})
export class RoleListComponent implements OnInit {
  roles: any[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getAll().subscribe(data => {
      this.roles = data;
    });
  }

  deleteRole(id: number) {
    if (confirm('Are you sure to delete this role?')) {
      this.roleService.delete(id).subscribe(() => this.loadRoles());
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [
    RoleListComponent,
    RoleFormComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    SharedMaterialModule
  ]
})
export class RoleModule { }

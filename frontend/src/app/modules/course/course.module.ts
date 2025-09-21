import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedMaterialModule
  ]
})
export class CourseModule { }

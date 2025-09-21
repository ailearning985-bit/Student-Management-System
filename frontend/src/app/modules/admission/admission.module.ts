import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [
    AdmissionListComponent,
    AdmissionFormComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    SharedMaterialModule
  ]
})
export class AdmissionModule { }

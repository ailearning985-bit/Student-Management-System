import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeeTransactionRoutingModule } from './fee-transaction-routing.module';
import { FeeTransactionListComponent } from './fee-transaction-list/fee-transaction-list.component';
import { FeeTransactionFormComponent } from './fee-transaction-form/fee-transaction-form.component';
import { SharedMaterialModule } from '../../shared/shared-material/shared-material.module';

@NgModule({
  declarations: [
    FeeTransactionListComponent,
    FeeTransactionFormComponent
  ],
  imports: [
    CommonModule,
    FeeTransactionRoutingModule,
    SharedMaterialModule
  ]
})
export class FeeTransactionModule { }

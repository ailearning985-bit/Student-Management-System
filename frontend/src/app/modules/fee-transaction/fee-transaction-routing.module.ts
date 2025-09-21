import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeeTransactionListComponent } from './fee-transaction-list/fee-transaction-list.component';
import { FeeTransactionFormComponent } from './fee-transaction-form/fee-transaction-form.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: FeeTransactionListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: FeeTransactionFormComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: FeeTransactionFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeTransactionRoutingModule {}

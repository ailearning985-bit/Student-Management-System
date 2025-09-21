import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';

const routes: Routes = [
  // ✅ Standalone Auth Routes (no layout)
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // ✅ Routes under layout
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'students', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule) },
      { path: 'courses', loadChildren: () => import('./modules/course/course.module').then(m => m.CourseModule) },
      { path: 'admissions', loadChildren: () => import('./modules/admission/admission.module').then(m => m.AdmissionModule) },
      { path: 'transactions', loadChildren: () => import('./modules/fee-transaction/fee-transaction.module').then(m => m.FeeTransactionModule) },
      { path: 'roles', loadChildren: () => import('./modules/role/role.module').then(m => m.RoleModule) },
      { path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
      { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  // Optional fallback
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

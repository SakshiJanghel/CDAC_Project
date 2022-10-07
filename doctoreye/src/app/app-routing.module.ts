import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './modules/patient/components/dashboard/dashboard.component';
import { PatientListComponent } from './modules/admin/components/patient-list/patient-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'mainpage',component: MainpageComponent },
  { path: 'mainpage/login',component: LoginComponent },
  { path: 'mainpage/forgot-password',component: ForgotPasswordComponent },
  {
    path: 'mainpage/admin',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'mainpage/doctor',
    canActivate:[AuthGuard],
    loadChildren: () =>
      import('./modules/doctor/doctor.module').then((m) => m.Doctor),
  },
  { path:'dashboard' , component:DashboardComponent},
  { path:'mainpage/admin', component:PatientListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { DashboardComponent } from '../patient/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent,
    children: [
      { path:'doctor' , component:PatientsComponent },
      { path:'home' , component: HomeComponent },
      { path: 'patients', component: PatientsComponent },
      { path: '' , redirectTo:'maipage/doctor/home',pathMatch:'full' },
      { path:'home/dashboard' , component:DashboardComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DoctorRoutingModule { }

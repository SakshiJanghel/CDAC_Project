import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { AddDoctorComponent } from './components/add-doctor/add-doctor.component';
 import { DoctorsComponent } from './components/doctors/doctors.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
// import { AddPatientComponent } from './components/add-patient/add-patient.component';
// import { PatientListComponent } from './components/patient-list/patient-list.component';
// import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
//import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';

@NgModule({
  declarations: [AdminDashboardComponent,  FooterComponent,  HeaderComponent , HomeComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}

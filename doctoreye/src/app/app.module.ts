import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddDoctorComponent } from './modules/admin/components/add-doctor/add-doctor.component';
import { DoctorsComponent } from './modules/admin/components/doctors/doctors.component';
import { DoctorDetailsComponent } from './modules/admin/components/doctor-details/doctor-details.component';
import { PatientDetailsComponent } from "../app/modules/admin/components/patient-details/patient-details.component"
import { PatientListComponent } from '../app/modules/admin/components/patient-list/patient-list.component';
import { AddPatientComponent } from '../app/modules/admin/components/add-patient/add-patient.component';
import { PatientsComponent } from './modules/doctor/components/patients/patients.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './modules/patient/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    AddDoctorComponent, 
    DoctorsComponent ,
    DoctorDetailsComponent,
    AddPatientComponent,
    PatientListComponent,
    PatientDetailsComponent,
    PatientsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

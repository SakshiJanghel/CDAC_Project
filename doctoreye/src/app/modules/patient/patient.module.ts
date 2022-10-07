import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ]
})
export class Patient { 
    
 id?: any;
  IncubatorNo!: string;
  PatientName!: string;
  FatherName!: string; 
  MotherName!: string; 
  ParentContactNo!: string;
  PatientBloodGroup!: string;
  PatientDiagnosis!: string;
  PatientPrecipitation!: string;
  PatientDoctorName!: string;
  published?: boolean; 
}

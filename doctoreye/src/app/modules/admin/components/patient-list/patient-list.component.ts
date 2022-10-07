import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modules/patient/patient.module';
import { PatientService } from 'src/app/services/patient.service';
import { PatientDetailsComponent } from '../patient-details/patient-details.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients?: Patient[]; 
  currentPatient : Patient = {
    IncubatorNo: '',
    PatientName: '',
    FatherName: '',
    MotherName: '',
    ParentContactNo: '',
    PatientBloodGroup: '',
    PatientDiagnosis: '',
    PatientPrecipitation: '',
    PatientDoctorName: ''
  } ;
  currentIndex = -1 ;
  IncubatorNo ="";

  constructor( private patientService : PatientService ) { }

  ngOnInit(): void {
    this.retrievePatients();
  }

  retrievePatients(): void {
    this.patientService.getAll()
      .subscribe({
        next: (data) => {
          this.patients = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePatients();
    this.currentPatient= {
      IncubatorNo: '',
      PatientName: '',
      FatherName: '',
      MotherName: '',
      ParentContactNo: '',
      PatientBloodGroup: '',
      PatientDiagnosis: '',
      PatientPrecipitation: '',
      PatientDoctorName: ''
    };
    this.currentIndex = -1;
  }

  setActivePatient(patient: Patient, index: number): void {
    this.currentPatient = patient;
    this.currentIndex = index;
  }

  removeAllPatients(): void {
    this.patientService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchIncubatorNo(): void {
    this.currentPatient = {
      IncubatorNo: '',
      PatientName: '',
      FatherName: '',
      MotherName: '',
      ParentContactNo: '',
      PatientBloodGroup: '',
      PatientDiagnosis: '',
      PatientPrecipitation: '',
      PatientDoctorName: ''
    };
    this.currentIndex = -1;

    this.patientService.findByIncubatorNo(this.IncubatorNo)
      .subscribe({
        next: (data: Patient[] | undefined) => {
          this.patients = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
      
  }


}

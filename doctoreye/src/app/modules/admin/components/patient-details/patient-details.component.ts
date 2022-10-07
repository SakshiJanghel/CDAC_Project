import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/modules/patient/patient.module';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardComponent } from 'src/app/modules/patient/components/dashboard/dashboard.component';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {


  @Input() viewMode = false;

  @Input() currentPatient:Patient = {
    IncubatorNo: '',
    PatientName: '',
    FatherName: '',
    MotherName: '',
    ParentContactNo: '',
    PatientBloodGroup: '',
    PatientDiagnosis: '',
    PatientPrecipitation: '',
    PatientDoctorName: '',
  };
  
  message = '';
currentDoctor: any;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getPatient(this.route.snapshot.params["id"]);
    }
  }

  getPatient(id: string): void {
    this.patientService['get'](id)
      .subscribe({
        next: (data: Patient) => {
          this.currentPatient = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      IncubatorNo:this.currentPatient.IncubatorNo ,
      PatientName: this.currentPatient.PatientName ,
      FatherName: this.currentPatient.FatherName , 
      MotherName: this.currentPatient.MotherName , 
      ParentContactNo: this.currentPatient.ParentContactNo,
      PatientBloodGroup: this.currentPatient.PatientBloodGroup,
      PatientDiagnosis: this.currentPatient.PatientDiagnosis,
      PatientPrecipitation: this.currentPatient.PatientPrecipitation ,
      PatientDoctorName: this.currentPatient.PatientDoctorName ,
      published: status
    };

    this.message = '';

    this.patientService.update(this.currentPatient.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentPatient.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updatePatient(): void {
    this.message = '';

    this.patientService.update(this.currentPatient.id, this.currentPatient)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This Patient was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePatient(): void {
    this.patientService.delete(this.currentPatient.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/patients']);
        },
        error: (e) => console.error(e)
      });
  }

}

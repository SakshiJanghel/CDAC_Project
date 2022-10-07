import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/modules/patient/patient.module';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient : Patient = {
    IncubatorNo: '',
    PatientName: '',
    FatherName: '',
    MotherName: '',
    ParentContactNo: '',
    PatientBloodGroup: '',
    PatientDiagnosis: '',
    PatientPrecipitation: '',
    PatientDoctorName: '',
    published: false,
  }
  submitted = false;

  constructor(private patientservice : PatientService ) { }

  ngOnInit(): void {
  }

  savePatient() {

    const data = {
      IncubatorNo:this.patient.IncubatorNo ,
      PatientName: this.patient.PatientName ,
      FatherName: this.patient.FatherName , 
      MotherName: this.patient.MotherName , 
      ParentContactNo: this.patient.ParentContactNo,
      PatientBloodGroup: this.patient.PatientBloodGroup,
      PatientDiagnosis: this.patient.PatientDiagnosis,
      PatientPrecipitation: this.patient.PatientPrecipitation ,
      PatientDoctorName: this.patient.PatientDoctorName ,
    };

    this.patientservice.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });

  }

    newPatient() {
      this.submitted = false;
      this.patient = {
        IncubatorNo:'',
        PatientName: '',
        FatherName: '', 
        MotherName: '', 
        ParentContactNo:'',
        PatientBloodGroup: '',
        PatientDiagnosis: '',
        PatientPrecipitation: '',
        PatientDoctorName: '',
        published: false,
      };
    }

}

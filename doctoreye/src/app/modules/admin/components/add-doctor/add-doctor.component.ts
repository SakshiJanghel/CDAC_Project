import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/modules/doctor/doctor.module';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

 

  doctor: Doctor = {
    name: '',
    specialization: '',
    phoneNo: '',
    published: false
  };
  submitted = false;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  saveDoctor(): void {
    const data = {
      name: this.doctor.name,
      specialization: this.doctor['specialization'],
      phoneNo : this.doctor.phoneNo
    };

    this.doctorService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newDoctor(): void {
    this.submitted = false;
    this.doctor = {
      name: '',
      specialization: '',
      phoneNo :'',
      published: false
    };
}


}

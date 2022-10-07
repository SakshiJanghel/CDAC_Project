import { Component, OnInit } from '@angular/core';
import { Doctor } from "../../../doctor/doctor.module";
import { DoctorService } from 'src/app/services/doctor.service';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors?: Doctor[];
  currentDoctor: Doctor = {};
  currentIndex = -1;
  name = '';
  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.retrieveDoctors();
  }
 
  retrieveDoctors(): void {
    this.doctorService.getAll()
      .subscribe({
        next: (data) => {
          this.doctors = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveDoctors();
    this.currentDoctor = {};
    this.currentIndex = -1;
  }

  setActiveDoctor(doctor: Doctor, index: number): void {
    this.currentDoctor = doctor;
    this.currentIndex = index;
  }

  removeAllDoctors(): void {
    this.doctorService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchName(): void {
    this.currentDoctor = {};
    this.currentIndex = -1;

    this.doctorService.findByName(this.name)
      .subscribe({
        next: (data) => {
          this.doctors = data;
          console.log(data);
        },
        error: (e: any) => console.error(e)
      });
  }

}

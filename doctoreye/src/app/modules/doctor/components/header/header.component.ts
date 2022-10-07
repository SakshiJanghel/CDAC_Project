import { Component, OnInit } from '@angular/core';
import { AuthDoctorService } from 'src/app/services/auth-doctor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authdoctor: AuthDoctorService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authdoctor.logout();
  }

}

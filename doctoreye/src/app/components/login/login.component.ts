import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthDoctorService } from 'src/app/services/auth-doctor.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  faLock = faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService ,private authdoctor: AuthDoctorService  ,private router :Router) {}
  
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    
    if (this.authdoctor.isLoggedIn()) {
      this.router.navigate(['doctor']);
    }
  }

  onSubmit(): void {
    
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            this.router.navigate(['mainpage/admin']);
          })
        }
      if (this.loginForm.valid) {
            this.authdoctor.login(this.loginForm.value).subscribe(
              (result) => {
                console.log(result);
                this.router.navigate(['mainpage/doctor']);
              },
          (err: Error) => {
            alert(err.message);
          }
        );
      }
  }
}

function elif(arg0: number) {
  throw new Error('Function not implemented.');
}
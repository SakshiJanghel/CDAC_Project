import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthDoctorService {

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/mainpage/login']);
  }

  login({ email, password }: any) {
    if (email === 'doctor@gmail.com' && password === 'doctor123') {
        this.setToken('ahjcbhdncjkdsnfdncjdnc');
        return of({ name: 'Sakshi Janghel', email: 'doctor@gmail.com' });
      }

       return throwError(new Error('Successfully Login'));

  }
}

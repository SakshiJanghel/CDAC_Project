import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthDoctorService } from '../services/auth-doctor.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router,private auth: AuthService, private authdoctor : AuthDoctorService) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  
   else if (!this.authdoctor.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.authdoctor.isLoggedIn();
  }
  
}

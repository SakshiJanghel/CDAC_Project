import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'; 
import { Observable } from 'rxjs';
import { Doctor } from '../modules/doctor/doctor.module';

const baseUrl = 'http://localhost:8080/api/doctors'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  [x: string]: any;
  
  constructor(private http: HttpClient) { }
  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(baseUrl);
  }

  get(id: any): Observable<Doctor> {
    return this.http.get(`${baseUrl}/${id}`);
 }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${baseUrl}?name=${name}`);
  }

  // getDoctor(){
  //   return this.http.get(
  //     'http://localhost:8080/api/doctors',{
  //       headers: {'Content-Type': 'application/json'} /** Use Content-type as your requirement undifined OR application/json**/
  //     })
  //}
 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../modules/patient/patient.module';

const baseUrl = 'http://localhost:4040/api/patients';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  getAll(): Observable<Patient[]> {
    return this.http.get<Patient[]>(baseUrl);
  }

  // get(id: any): Observable<Patient> {
  //   return this.http.get(`${baseUrl}/${id}`);
  //  }

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

  findByIncubatorNo(IncubatorNo: string): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${baseUrl}?IncubatorNo=${IncubatorNo}`);
  }
}

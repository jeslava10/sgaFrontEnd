import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employees } from '../models/employees.model';

const baseUrl = 'http://localhost:8089/api/sga/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  
  getAll(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${baseUrl}/all`,this.httpOptions);
  }
  get(id: any): Observable<Employees> {
    return this.http.get(`${baseUrl}/${id}`,this.httpOptions);
  }
  create(data: Employees): Observable<Employees> {
    return this.http.post(`${baseUrl}/save`, JSON.stringify(data),this.httpOptions);
  }
  update( data: Employees): Observable<Employees> {
    return this.http.put(`${baseUrl}/update`, JSON.stringify(data),this.httpOptions);
  }

  delete(data: Employees): Observable<any> {
    return this.http.post(`${baseUrl}/delete`,JSON.stringify(data),this.httpOptions);
  }

}

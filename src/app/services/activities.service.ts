import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Activities } from '../models/activities.model';

const baseUrl = 'http://localhost:8089/api/sga/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAll(): Observable<Activities[]> {
    return this.http.get<Activities[]>(`${baseUrl}/all`,this.httpOptions);
  }

  get(id: any): Observable<Activities> {
    return this.http.get(`${baseUrl}/${id}`,this.httpOptions);
  }

  create(data: Activities): Observable<Activities> {
    return this.http.post(`${baseUrl}/save`, JSON.stringify(data),this.httpOptions);
  }

  update( data: Activities): Observable<Activities> {
    return this.http.put(`${baseUrl}/update`, JSON.stringify(data),this.httpOptions);
  }

  delete(data: Activities): Observable<any> {
    return this.http.post(`${baseUrl}/delete/`,JSON.stringify(data),this.httpOptions);
  }

  findByName(data: Activities): Observable<any> {
    return this.http.post(`${baseUrl}/find/name`,JSON.stringify(data),this.httpOptions);
  }

}

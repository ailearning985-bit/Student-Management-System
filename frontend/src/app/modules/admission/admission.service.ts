import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdmissionService {
  private baseUrl = `${environment.apiUrl}/api/admissions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  add(admission: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, admission);
  }

  update(id: number, admission: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, admission);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

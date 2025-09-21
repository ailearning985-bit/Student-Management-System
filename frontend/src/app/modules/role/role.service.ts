import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoleService {
  private baseUrl = `${environment.apiUrl}/api/Roles`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  add(role: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, role);
  }

  update(id: number, role: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, role);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeeTransactionService {
  private baseUrl = `${environment.apiUrl}/api/transactions`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  add(transaction: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, transaction);
  }

  update(id: number, transaction: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, transaction);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

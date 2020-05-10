import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TotalCases } from '../_models/totalCases';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = `${environment.apiUrl}Dashboard/`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTotalCases(requestData: any): Observable<TotalCases> {
    return this.http.get<TotalCases>(`${this.baseUrl}totalCases`, {
      params: requestData
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TotalCases } from '../_models/totalCases';
import { TotalCasesRequest } from '../_models/totalCasesRequest';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = `${environment.apiUrl}Dashboard/`;

  constructor(private http: HttpClient) { }

  public getTotalCases(requestData: TotalCasesRequest): Observable<TotalCases> {
    return this.http.get<TotalCases>(`${this.baseUrl}totalCases`,
    {
      params: {
        reportDate: requestData.reportDate,
        continent: requestData.continent
      }
    });
  }

}

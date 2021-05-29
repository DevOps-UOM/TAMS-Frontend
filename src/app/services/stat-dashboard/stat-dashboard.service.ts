import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatDashboardService {

  constructor(
    private http: HttpClient
  ) { }
  listAllAgents(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/best-agents');
  }

  listMostVisitedCustomers(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/most-visited-customers');
  }

  listMostEfficientDays(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/most-efficient-days');
  }

  listLeastEfficientDays(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/least-efficient-days');
  }

  listDailyTaskCount(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/list-daily-task-count');
  }

  listMonthlyTaskCount(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/list-monthly-task-count');
  }
}

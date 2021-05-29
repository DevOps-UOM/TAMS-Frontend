import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatDashboardService {

  constructor(private http: HttpClient
  ) { }

  listAllAgents(): Observable<any> {
    return this.http.get('http://localhost:3000/best-agents');
  }

  listMostVisitedCustomers(): Observable<any> {
    return this.http.get('http://localhost:3000/most-visited-customers');
  }

  listMostEfficientDays(): Observable<any> {
    return this.http.get('http://localhost:3000/most-efficient-days');
  }

  listLeastEfficientDays(): Observable<any> {
    return this.http.get('http://localhost:3000/least-efficient-days');
  }

  listDailyTaskCount(): Observable<any> {
    return this.http.get('http://localhost:3000/list-daily-task-count');
  }

  listMonthlyTaskCount(): Observable<any> {
    return this.http.get('http://localhost:3000/list-monthly-task-count');
  }
}



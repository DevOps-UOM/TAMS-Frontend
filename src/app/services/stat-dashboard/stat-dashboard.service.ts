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


}



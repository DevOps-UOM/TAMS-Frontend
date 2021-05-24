import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatDashboardService {

  constructor(private http: HttpClient) { }

  findBestAgents() {
    
    return this.http.get(environment.apiBaseUrl + '/best-agents');
  }

}

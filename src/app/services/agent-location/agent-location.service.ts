import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AgentLocationService {

  constructor(private http: HttpClient) { }

  getAgentLocation(randomKey: String): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/checkValidity/' + randomKey);
  }

  getAgentLocationValidity(data:any): Observable<any> {
    return this.http.get(environment.apiBaseUrl + '/isExpired/' + data.agent_id+'/'+data.cust_id);
  }

}


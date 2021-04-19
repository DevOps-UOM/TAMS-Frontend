import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityServiceService {

  constructor(
    private http: HttpClient
  ) { }
  createAvailability(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl+'/availability', data);
  }
  getAllAvailability(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/availability');
  }
}

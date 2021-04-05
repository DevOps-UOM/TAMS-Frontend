import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityServiceService {

  constructor(
    private http: HttpClient
  ) { }
  createAvailability(data: any): Observable<any> {
    return this.http.post('https://tams-devops.herokuapp.com/availability', data);
  }
  getAllAvailability(): Observable<any> {
    return this.http.get('https://tams-devops.herokuapp.com/availability');
  }
}

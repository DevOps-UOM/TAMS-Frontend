import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityServiceService {

  apiEndPoint = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }
  createAvailability(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/availability', data);
  }
  getAllAvailability(): Observable<any> {
    return this.http.get('http://localhost:3000/availability');
  }

  deleteAvailability(date: Date, custid: String) {
    return this.http.delete(this.apiEndPoint+ '/availability/' + date + '/' + custid);
  }
}

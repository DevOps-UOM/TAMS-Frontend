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
<<<<<<< HEAD
    return this.http.post(environment.apiBaseUrl+'/availability', data);
  }
=======
    return this.http.post('http://localhost:3000/availability', data);
  } 
>>>>>>> fff03c199f0cf243f3249783120112657256a5d2
  getAllAvailability(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/availability');
  }

  deleteAvailability(date: Date, custid: String) {
    return this.http.delete('http://localhost:3000/availability/' + date + '/' + custid);
  }
}

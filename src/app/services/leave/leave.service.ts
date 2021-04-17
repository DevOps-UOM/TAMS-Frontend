import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class LeaveService {

 
  readonly baseURL = 'http://localhost:3000/leaves';

  constructor(
    private http: HttpClient
  ) { }
  createleaves(data: any): Observable<any> {
    return this.http.post(this.baseURL, data);
  }
  getAllleaves(): Observable<any> {
    return this.http.get(this.baseURL);
  }

  


}

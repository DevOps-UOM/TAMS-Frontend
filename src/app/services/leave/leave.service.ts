import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class LeaveService {

 
  readonly baseURL = environment.apiBaseUrl+'/leaves';

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

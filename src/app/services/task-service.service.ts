import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(
    private http: HttpClient
  ) { }
  createTask(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl+'/task', data);
  }
  getAllTask(): Observable<any> {
    return this.http.get(environment.apiBaseUrl+'/task');
  }
}

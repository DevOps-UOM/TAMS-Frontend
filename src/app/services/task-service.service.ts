import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(
    private http: HttpClient
  ) { }
  createTask(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/task', data);
  }
  getAllTask(): Observable<any> {
    return this.http.get('http://localhost:3000/task');
  }
}

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
    return this.http.post('https://tams-devops.herokuapp.com/task', data);
  }
  getAllTask(): Observable<any> {
    return this.http.get('https://tams-devops.herokuapp.com/task');
  }
}

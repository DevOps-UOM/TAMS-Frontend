import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssignService {

  apiEndPoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createAssign(data: any): Observable<any> {
    return this.http.post(this.apiEndPoint + '/assign', data);
  }

}

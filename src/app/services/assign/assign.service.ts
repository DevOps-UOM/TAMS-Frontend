import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient,HttpResponse,HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AssignService {

  //apiEndPoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createAssign(data: any): Observable<any> {
    return this.http.post(environment.apiBaseUrl + '/assign', data);
  }

}

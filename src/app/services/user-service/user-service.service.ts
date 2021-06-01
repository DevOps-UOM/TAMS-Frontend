import { Grade } from './../../models/grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users = environment.apiBaseUrl+'/users';

  constructor(private http: HttpClient) { }

  findOne(userid: string) {
    return this.http.get<any>( this.users + '/' + userid);
  }

  
  // updateAUser(userid: string) {
  //   return this.http.get<any>( this.users + '/' + userid);
  // }
}

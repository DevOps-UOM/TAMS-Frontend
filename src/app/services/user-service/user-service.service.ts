import { Grade } from './../../models/grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  findOne(userid: string) {
    return this.http.get<any>( this.users + '/' + userid);
  }
}

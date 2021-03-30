import { Grade } from './../../models/grade.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  grades: Grade[];
  maxGrades: Grade[];

  constructor(private http: HttpClient) { }

  findOne(userid: string): Observable<Grade> {
    return this.http.get('/api/users/' + userid).pipe(
      map((user:Grade) => user)
    )
  }
}

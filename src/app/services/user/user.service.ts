import { Role } from './../../models/role.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { User } from './../../models/user.model';
import { of, Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: Role.User,
  };

  observableUser = new BehaviorSubject<User>(null);
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient, private router: Router) {
    if (this.isLoggedIn()) {
      console.log(this.getUserPayload(), 1);
      this.observableUser.next(this.getUserPayload())
    } else {
      this.observableUser.next(null);
    }
  }

  //HttpMethods

  // postUser(user: User){
  //   return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
  // }

  login(authCredentials) {
    return this.http.post(environment.apiBaseUrl + '/api/authenticate', authCredentials,this.noAuthHeader);
  }

  logout() {
    this.observableUser.next(null);
    this.deleteToken();
    this.router.navigate(['/boards/login']);
  }

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl + '/api/userProfile');
  }

  getById(id: number) {
<<<<<<< HEAD
    return this.http.get<User>(`${environment.apiBaseUrl}/api/users/${id}`);
=======
    return this.http.get<User>(`${environment.apiBaseUrl}/users/${id}`, {
      headers: {
        'Authorization': `Bearer ${this.getToken()}`
      }
    });
>>>>>>> fff03c199f0cf243f3249783120112657256a5d2
  }


  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setObservableUser() {
    console.log('called', this.getUserPayload());
    this.observableUser.next(null);
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
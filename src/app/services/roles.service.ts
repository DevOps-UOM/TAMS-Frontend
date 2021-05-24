import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private rolesAPi: string = "https://api.npoint.io/97c436983e2fbacffc7f";

  constructor(private http: HttpClient) { }

  /**
   * gets the user role
   */
  public roles(): Observable<{ roles: string[] }> {
    return this.http.get<{ roles: string[] }>(this.rolesAPi);
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from "./../../services/user/user.service";
import { AuthenticationService } from "./../../services/user/authentication.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService : UserService,
    private authenticationService: AuthenticationService
) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const user = this.authenticationService.userValue;
      if(!this.userService.isLoggedIn()) {
        return false;
      }

      if (next.data.roles && next.data.roles.indexOf(user.role) === -1) {
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        return false;
      }
      return true;
  }
}
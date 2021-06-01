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
      if(!this.userService.isLoggedIn()) {
        this.router.navigate(['/boards/login']);
        return false;
      }

      console.log(next.data.roles);
      if (next.data.roles && next.data.roles.indexOf(this.userService.getUserPayload().role) === -1) {
        this.router.navigate(['/boards/itinerary-map']);
        return false;
      }

      return true;
  }
}
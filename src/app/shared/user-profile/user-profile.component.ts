import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model';
import { LayoutConfigService } from 'src/app/services/layout-service/layout.service';
import { LayoutConfig } from 'src/app/models/layout.config';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(public userService: UserService, private router: Router, private configService: LayoutConfigService) { }

  ngOnInit() {
    this.configService.setConfig(new LayoutConfig(true, true));
    this.userDetails = this.userService.getUserPayload();
  }

  onLogout() {
    this.userService.logout();
  }

  navigateToProfile() {
    this.router.navigate(['../boards/request-reset-password']);
  }

}

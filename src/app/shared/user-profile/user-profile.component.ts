import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user/user.service';
import { Router } from "@angular/router";
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userDetails = this.userService.getUserPayload();
  }

  onLogout(){
    this.userService.logout();
  }

}

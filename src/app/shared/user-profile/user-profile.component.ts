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
    this.userService.getUserProfile().subscribe(
      (res: any) => {
        this.userDetails = res['user'];
        localStorage.setItem('user', JSON.stringify(res.user));
        this.userService.observableUser.next(res.user as User);
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/boards/login']);
  }

}

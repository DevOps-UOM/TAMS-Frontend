import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GpsTrackService } from 'src/app/services/gps-track/gps-track.service';
import { User } from 'src/app/models/user.model';
import { Role } from 'src/app/models/role.model';
import { LayoutConfigService } from 'src/app/services/layout-service/layout.service';
import { LayoutConfig } from 'src/app/models/layout.config';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public gpsTrackService: GpsTrackService,private configService: LayoutConfigService) { }

  model = {
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  serverErrorMessages: string;

 

  ngOnInit() {
    if (this.userService.isLoggedIn())
      this.router.navigate(['/userprofile']);
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {console.log("Login in")
        this.userService.setToken(res['token']);
        this.userService.setObservableUser();

        

        this.router.navigateByUrl('/userprofile');

        
      },
      err => {
        if(err){
          console.log("Sign in error ")
          console.log(err);
          this.serverErrorMessages = err;

        }
      }
    );
    // console.log('clicked')
    // this.userService.observableUser.next(null);
  }

  navigateToProfile() {
    this.router.navigate(['../boards/request-reset-password']);
  }

}
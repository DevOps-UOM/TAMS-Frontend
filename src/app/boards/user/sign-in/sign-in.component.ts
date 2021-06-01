import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [UserService]
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  model = {
    email: '',
    password: ''
  };

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  serverErrorMessages: string;

  ngOnInit() {
    if (this.userService.isLoggedIn())
      this.router.navigate(['/boards/itinerary-map']);
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.userService.setObservableUser();
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
    // console.log('clicked')
    // this.userService.observableUser.next(null);
  }

  navigateToProfile() {
    this.router.navigate(['../boards/request-reset-password']);
  }

}

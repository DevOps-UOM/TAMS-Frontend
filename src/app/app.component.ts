import { Component } from '@angular/core';
import { Role } from './models/role.model';
import { User } from './models/user.model';
import { GpsTrackService } from './services/gps-track/gps-track.service';
import { UserService } from './services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  user: User;
  title = 'TAMSFrontend';

  constructor(public userService: UserService,public gpsTrackService:GpsTrackService){
    this.user = userService.getUserPayload()
    if (this.user != null && this.user.userid != null && this.user.role===Role.ta) {
      gpsTrackService.trackMe();
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationModel } from 'src/app/models/realtimedb.model';
import { User } from 'src/app/models/user.model';
import { GeoService } from '../geo/geo.service';
import { UserService } from '../user';

@Injectable({
  providedIn: 'root'
})
export class GpsTrackService {

  liveLat: number;
  liveLng: number;
  isTracking: boolean;
  user: User;

  liveLocation: LocationModel = new LocationModel();

  constructor(public userService: UserService,private geo: GeoService) {
    this.user = userService.getUserPayload()
    if (this.user != null && this.user.userid != null) {
      this.geo.updateOnDisconnect(this.user.userid.toString())
    }
   }


  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.liveLat = position.coords.latitude;
        this.liveLng = position.coords.longitude;

        //var locData;

        if (this.user && this.user.userid) {
          this.geo.get(this.user.userid.toString()).then(res => {
            console.log(res);
            if (res) {
              var angle;
              if (this.liveLat === res.coordinates.lat && this.liveLng === res.coordinates.lng) {
                angle = res.angle;
              } else {
                angle = Math.atan2(this.liveLng - res.coordinates.lng, this.liveLat - res.coordinates.lat) * 180 / Math.PI
              }
              console.log(angle);
              this.geo.update(this.user.userid.toString(), { userName: this.user.first_name.toString(), coordinates: { lat: this.liveLat, lng: this.liveLng }, angle: angle });

            } else {
              console.log("creating")
              this.liveLocation = {
                userName: this.user.first_name.toString(),
                coordinates: { lat: this.liveLat, lng: this.liveLng },
                angle: 0
              }
              this.geo.update(this.user.userid.toString(), this.liveLocation);
            }
          })
        }

        console.log(position);
        //this.showTrackingPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  async getLocation(){
      return {lat:this.liveLat,lng:this.liveLng};
  }

}

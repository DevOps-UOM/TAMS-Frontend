import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus, Itinerary } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations'
import { emitWarning } from 'process';
import { TaTaskCardComponent } from "../../shared/ta-task-card/ta-task-card.component";
import { TaskAssignmentService } from "../../services/task-assignment/task-assignment.service"
import { UserService } from 'src/app/services/user';
import { User } from 'src/app/models/user.model';
import * as moment from 'moment'
import { GpsTrackService } from 'src/app/services/gps-track/gps-track.service';
import { LocationModel } from 'src/app/models/realtimedb.model';

@Component({
  selector: 'app-ta-task',
  templateUrl: './ta-task.component.html',
  styleUrls: ['./ta-task.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
          ]))
        ]), { optional: true }),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 })
          ]))
        ]), { optional: true })
      ])

    ]),
    // trigger('buttonAnim',[
    //   transition(':enter',[
    //     style({opacity:0,transform:'translateY(-75px)'}),
    //     animate(2000,style({opacity:1,transform:'translateY(0px)'}))
    //   ] ),
    //   transition(':leave',[
    //     style({opacity:1,transform:'translateY(0px)'}),
    //     animate(2000,style({opacity:0,transform:'translateY(-75px)'}))
    //   ] )

    // ])
  ]
})
export class TaTaskComponent implements OnInit {

  //@ViewChildren(TaTaskCardComponent) parent: QueryList<TaTaskCardComponent>;

  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];
  pendingList: AllocatedCustomers[] = [];

  origin: any;
  destination: any;
  waypoints: google.maps.DirectionsWaypoint[] = [];

  tempOptimalRoute = [];
  minTime: number = null;
  destNum: number;

  alert: any;

  optimalRoute = [];

  selectedItinerary: Itinerary;

  date: any = moment(moment().format("YYYY-MM-DD")).toDate();
  taid: String;
  modeSignal: string = modeSignalStatus.markerMode;

  user: User;

  liveLocation: PointLoc;

  constructor(private itineraryService: ItineraryService, private taskAssignmentService: TaskAssignmentService, private userService: UserService, private gpsTrackService: GpsTrackService) {
    this.user = userService.getUserPayload()
    this.taid = this.user.userid



  }

  async ngOnInit() {

    //this.gpsTrackService.trackMe()


    console.log("----------Location----------")
    if (this.liveLocation) {
      this.origin = {
        lat: this.liveLocation.lat,
        lng: this.liveLocation.lng
      };
      console.log(this.liveLocation);
      console.log(this.origin)
    }





    await this.getItineraryDetails();

    await this.getItinerary();

    const value = <number>await this.getAllocatedPendingustomers(1);

    await this.getDirections();



  }



  async getItinerary() {

    this.itineraryService.getASingleItinerary(this.date, this.taid).subscribe((res) => {

      this.selectedItinerary = res.data[0];
      console.log(this.selectedItinerary);
      return true;
    }, (err) => {
      this.alert.class = 'alert alert-danger';
      if (err.status === 401) {
        this.alert.message = err.error.message;
        setTimeout(() => {
          localStorage.clear();
        }, 3000);
      } else if (err.status) {
        this.alert.class = err.error.message;
      } else {
        this.alert.message = 'Error! either server is down or no internet connection';
      }
      throw err;
    });



  }

  async getItineraryDetails() {
    this.loading = true;

    this.itineraryService.getAllocatedCustomers(this.date, this.taid).subscribe((res) => {
      this.loading = false;
      (res.body.data && res.body.data.length > 0) ? this.customerList = res.body.data : this.customerList = [];
      //console.log("Dataaaa"+JSON.stringify(this.customerList));
      //console.log(res);
      return true;
    }, (err) => {
      this.alert.class = 'alert alert-danger';
      if (err.status === 401) {
        this.alert.message = err.error.message;
        setTimeout(() => {
          localStorage.clear();
        }, 3000);
      } else if (err.status) {
        this.alert.class = err.error.message;
      } else {
        this.alert.message = 'Error! either server is down or no internet connection';
      }
      throw err;
    });




  }

  getAllocatedPendingustomers(x) {

    return new Promise(resolve => {
      this.itineraryService.getAllocatedPendingCustomers(this.date, this.taid).subscribe((res) => {

        (res.body.data && res.body.data.length > 0) ? this.pendingList = res.body.data : this.pendingList = [];

        if (!res.body.status) {
          alert("Today, There are no allocated customers for you");
          return;
        }

        console.log(res);
        resolve(x);
      }, (err) => {
        this.alert.class = 'alert alert-danger';
        if (err.status === 401) {
          this.alert.message = err.error.message;
          setTimeout(() => {
            localStorage.clear();
          }, 3000);
        } else if (err.status) {
          this.alert.class = err.error.message;
        } else {
          this.alert.message = 'Error! either server is down or no internet connection';
        }
        throw err;
      })
    })




  }


  async refresh() {
    //this.getItinerary();
    // this.parent.forEach((p)=>p.child.calculateRoute());
    this.liveLocation = await this.gpsTrackService.getLocation();
    const value = <number>await this.getAllocatedPendingustomers(1)
      .then(() => {
        this.getDirections();
      })
      .then(() => {
        this.getItineraryDetails();
      })
      .then(() => {
        this.calculateRoute();
      })
      .then(() => {
        this.getDirections();
      })

  }

  async calculateRoute() {

    //this.getItineraryDetails();
    if (this.liveLocation) {
      this.origin = {
        lat: this.liveLocation.lat,
        lng: this.liveLocation.lng
      };
      console.log(this.liveLocation);
      console.log(this.origin)
    }

    console.log(this.origin);
    var count = 0;

    var loc: Loc;
    const directionsService = new google.maps.DirectionsService();

    let tempOrigin = this.origin;

    this.minTime = null;
    this.tempOptimalRoute = null;
    this.destNum = null;

    //console.log(this.origin);
    for (var i = 0; i < this.pendingList.length; i++) {
      const tempWaypoints: google.maps.DirectionsWaypoint[] = [];

      let tempDestination = {
        lat: this.pendingList[i].location.coordinates[0],
        lng: this.pendingList[i].location.coordinates[1]
      };


      //console.log(this.markerList.length);
      for (var j = 0; j < this.pendingList.length; j++) {
        //console.log(this.markerList[j]);
        if (i == j) {
          continue;
        }

        loc = {
          location: {
            lat: this.pendingList[j].location.coordinates[0],
            lng: this.pendingList[j].location.coordinates[1]
          },
          stopover: true
        }
        tempWaypoints.push(loc);

      }
      // var tempBool = false;

      console.log(tempWaypoints);
      var route;
      directionsService.route(
        {
          origin: tempOrigin,
          destination: tempDestination,
          waypoints: tempWaypoints,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
          avoidTolls: true,
        },
        (response, status) => {
          if (status === "OK" && response) {

            console.log("----------------------response---------------------")
            console.log(response);
            route = response.routes[0];

            let tempTime = 0;
            console.log(route.waypoint_order);
            for (var k = 0; k < route.legs.length; k++) {
              tempTime += route.legs[k].duration.value;
            }

            if (this.minTime == null || this.minTime > tempTime) {
              this.tempOptimalRoute = route.waypoint_order;
              this.minTime = tempTime;
              this.destNum = count;
            }

            console.log(count++);
            console.log("Time : " + tempTime);
            console.log("Route : " + route.waypoint_order);

            // For each route, display summary information.

          } else {
            alert("Directions request failed due to " + status);
          }
        }
      );

      //console.log(route);

    }
    //while(loading);

    setTimeout(() => {
      // console.log("Minimum Time : " + this.minTime);
      // console.log("Optimal Route : " + this.tempOptimalRoute);
      // console.log("Destination : " + this.destNum);
      this.optimalRoute = [];
      for (var i = 0; i < this.tempOptimalRoute.length; i++) {
        if (this.tempOptimalRoute[i] >= this.destNum) {
          this.tempOptimalRoute[i]++;
        }
        this.optimalRoute.push(this.tempOptimalRoute[i]);
      }
      this.optimalRoute.push(this.destNum);

      //console.log(this.optimalRoute);

      this.updateQueueNumber();
      this.getItinerary();
    }, 2500);
    return true;
  }

  updateQueueNumber() {
    console.log(this.optimalRoute);
    for (var i = 0; i < this.pendingList.length; i++) {
      let data = {
        cust_id: this.pendingList[this.optimalRoute[i]].cust_id,
        itinerary_id: this.selectedItinerary._id,
        queue_number: i
      }
      console.log(data);
      this.taskAssignmentService.updateQueueNumber(data).subscribe((res) => {
        try {
          console.log(res);
        } catch (exception) {
          alert("Updating Optimal Route Error...!");
        }

      });

    }
  }

  async getDirections() {
    var loc: Loc;
    var i: number;

    this.waypoints = [];

    if (this.liveLocation && this.customerList && this.customerList[0] && this.customerList[0].location && this.customerList[0].location.coordinates) {

      // this.origin = {
      //   lat: this.currentLat,
      //   lng: this.currentLng
      // };


      console.log("----------------Customer list--------------")
      console.log(this.customerList);
      for (i = 0; i < this.customerList.length - 1; i++) {
        loc = {
          location: {
            lat: this.customerList[i].location.coordinates[0],
            lng: this.customerList[i].location.coordinates[1]
          },
          stopover: true
        }
        this.waypoints.push(loc);
      }
      console.log(this.waypoints);
      this.destination = {
        lat: this.customerList[i].location.coordinates[0],
        lng: this.customerList[i].location.coordinates[1]
      };
    }

    console.log(this.origin);
    console.log(this.destination);
  }
}


class Loc {
  location: any;
  stopover: boolean;
}


class PointLoc {
  public lat: number;
  public lng: number;
}
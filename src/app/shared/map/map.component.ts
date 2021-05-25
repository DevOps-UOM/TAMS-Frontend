import { Component, HostListener, Input, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit, Renderer2, NgZone, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AllocatedCustomers, Itinerary, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service'
import { TaskAssignmentService } from '../../services/task-assignment/task-assignment.service'

import { MapsAPILoader } from '@agm/core'

import { DataService } from '../../services/data/data.service'
import { Subscription } from 'rxjs'

import { GeoService } from '../../services/geo/geo.service'

import { Coordinates, LocationModel } from '../../models/realtimedb.model'
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user.model';
import { AssignService } from 'src/app/services/assign/assign.service';
import { AgentLocationService } from 'src/app/services/agent-location/agent-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() modeSignal: string;
  @Input() markerList: AllocatedCustomers[] = [];
  @Input() currentItinerary: Itinerary;

  //--------------to change map size dynamically---------------
  @ViewChild('AgmMap') agmMap: any;
  @ViewChild('wrapper') wrapper: ElementRef;
  //---------------------Map-----------------------------------
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  tempOptimalRoute = [];
  minTime: number = null;
  destNum: number;

  optimalRoute = [];

  alert: any;

  public latitude: number = 7.928309;
  public longitude: number = 80.5;
  private centerLat: number = 7.928309;
  private centerLng: number = 80.5;
  public zoom: number = 8;

  map_width: number;

  private changeLat: number = 7.928309;
  private changeLng: number = 80.5;

  isShowSidebar: boolean;
  subscription: Subscription;

  currentLocaionIcon = '../../../assets/images/ic_ta_location.svg';
  customerLocationIcon = '../../../assets/images/ic_customer_location.svg';

  //lat: number = 7.928309;
  //lng: number = 80.5;

  address: string;
  private geoCoder;

  selectedCustomerId: String;
  @Input() selectedCustomer: AllocatedCustomers;

  currentLat: number;
  currentLng: number;
  isTracking: boolean;

  widthReduce: number = 0;
  heightReduce: number = 150;

  origin: any;
  destination: any;
  waypoints: google.maps.DirectionsWaypoint[] = [];

  markers: PointLoc[] = [];

  liveLat: number;
  liveLng: number;
  liveMarkers: google.maps.Marker[] = [];

  liveLocation: LocationModel = new LocationModel();
  // userId: string;
  // userName: string = "yasitha";
  user: User;
  //submitted = false;

  //------------------------Location pinning------------------------
  @Output() newItemEvent = new EventEmitter<PointLoc>();


  @Input() TAAgent: string;
  @Input() uniqueKey: string;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @HostListener('window:resize')
  onWindowResize() {
    this.onResize();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.geo.delete(this.userId);
    // console.log("Destroyed")
  }

  ngAfterViewInit() {
    this.resizeMap();

    // this.agmMap.triggerResize().then(() =>
    //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));
  }

  ngOnChanges() {

  }


  onResize() {
    // resize the container for the google map

    // recenters the map to the resized area.
    // this.agmMap.triggerResize().then(() =>
    //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));

    this.resizeMap();
  }


  resizeMap() {
    if (this.modeSignal === modeSignalStatus.singlePathMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 420;
        console.log(this.modeSignal)

      } else {
        this.widthReduce = 175;
      }
    } else if (this.modeSignal === modeSignalStatus.directionMode || this.modeSignal === modeSignalStatus.liveMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 310;
      } else {
        this.widthReduce = 50;
      }
    } else if (this.modeSignal === modeSignalStatus.singleLiveMode) {
      this.widthReduce = 50;
    } else if (this.modeSignal === modeSignalStatus.pinningMode) {
      this.widthReduce = 1050;
    }

    this.renderer.setStyle(
      this.wrapper.nativeElement, 'width',
      (window.innerWidth - this.widthReduce) + 'px'
    );
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      (window.innerHeight - this.heightReduce) + 'px'
    );
  }

  // idle fires after paning or zooming is done. 
  // This is where we want to capture the center of the map.
  // This way if the user resizes, the center is preserved.
  idle() {
    this.centerLat = this.changeLat;
    this.centerLng = this.changeLng;
  }

  // this event fires whenever any event changes the center. Panning, zooming, or resizing.
  centerChange(event: any) {
    if (event) {
      this.changeLat = event.lat;
      this.changeLng = event.lng;
    }
  }

  constructor(private itineraryService: ItineraryService, private renderer: Renderer2, private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private data: DataService, private taskAssignmentService: TaskAssignmentService, private geo: GeoService, public userService: UserService, private agentLocationService: AgentLocationService) {
    //this.trackMe();

    this.user = userService.getUserPayload()
    if (this.user != null && this.user.userid != null) {
      this.geo.updateOnDisconnect(this.user.userid.toString())
    }

  }

  ngOnInit(): void {

    this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar)





    console.log(this.modeSignal);
    switch (this.modeSignal) {
      case "directionMode":  this.getDirections(); break;
      case "markerMode": this.getMarkers(); break;
      case "singlePathMode": this.getSingleDirection(); break;
      case "liveMode": this.showTrackingPosition(); break;
      case "singleLiveMode": this.showTALocation(); break;
      case "pinningMode": this.pinLocation(); break;
      default: console.log("default Case Triggered");
    }




    // setTimeout(() => {
    //   this.calculateRoute();
    // }, 3000);

    //this.test();

  }



  async getSingleDirection() {
    // this.trackMe();
    await this.setCurrentLocation(1)

    this.mapsAPILoader.load().then(() => {
      //this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

    });
    setTimeout(() => {
      this.origin = {
        lat: this.currentLat,
        lng: this.currentLng
      };

      this.destination = {
        lat: this.selectedCustomer.location.coordinates[0],
        lng: this.selectedCustomer.location.coordinates[1]
      };
      console.log(this.currentLat + " " + this.currentLng);
    }, 2000);

    this.initMap();

  }



  async getDirections() {

    await this.setCurrentLocation(1)


    var loc: Loc;
    var i: number;

    if (this.markerList && this.markerList[0] && this.markerList[0].location && this.markerList[0].location.coordinates) {

      this.origin = {
        lat: this.currentLat,
        lng: this.currentLng
      };

      // this.origin = {
      //   lat: 6.879277,
      //   lng: 79.918083
      // };


      for (i = 0; i < this.markerList.length - 1; i++) {
        loc = {
          location: {
            lat: this.markerList[i].location.coordinates[0],
            lng: this.markerList[i].location.coordinates[1]
          },
          stopover: true
        }
        this.waypoints.push(loc);
      }
      console.log(this.waypoints);
      this.destination = {
        lat: this.markerList[i].location.coordinates[0],
        lng: this.markerList[i].location.coordinates[1]
      };
    }

    this.initMap();

    //console.log(this.origin);
    //console.log(this.destination);
  }

  getMarkers() {
    for (var i = 0; i < this.markerList.length; i++) {
      this.markers.push({
        lat: this.markerList[i].location.coordinates[0],
        lng: this.markerList[i].location.coordinates[1]
      });
    }

    this.displayMarkers();
    //console.log(this.markers);
  }

  // trackMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.watchPosition((position) => {
  //       this.currentLng = +position.coords.longitude;
  //       this.currentLat = +position.coords.latitude;
  //     });
  //     console.log(this.currentLat+" "+this.currentLng);
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  setCurrentLocation(x) {

    return new Promise(resolve => {

      if ('geolocation' in navigator) {
        console.log(this.modeSignal)
        navigator.geolocation.getCurrentPosition((position) => {

          this.currentLat = position.coords.latitude;
          this.currentLng = position.coords.longitude;

          this.origin = {
            lat: this.currentLat,
            lng: this.currentLng
          };

          console.log(this.origin);
          resolve(x);
          //this.zoom = 8;
          //this.getAddress(this.currentLat, this.currentLng);
        }, (err) => {
          console.log("Current Location Error" + err);
        }
        );
      } else {
        alert("Geo location is not supported");
      }
    })

  }


  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          //this.zoom = 12;
          this.address = results[0].formatted_address;
          console.log(this.address);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  initMap(): void {
    console.log("init map")
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },
      }
    );
    directionsRenderer.setMap(map);
    //console.log(this.modeSignal);
    switch (this.modeSignal) {
      case "directionMode": this.calculateAndDisplayRoute(directionsService, directionsRenderer); break;
      case "singlePathMode": this.displaySingleRoute(directionsService, directionsRenderer); break;
      // case "liveMode": this.showTrackingPosition();break;
      default: console.log("default Case Triggered");
    }

  }

  displayMarkers() {

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },
      }
    );

    const infoWindow = new google.maps.InfoWindow();

    for (var i = 0; i < this.markers.length; i++) {
      const mark = new google.maps.Marker({
        position: this.markers[i],
        map,
        title: this.markerList[i].name.first_name + " " + this.markerList[i].name.last_name,
        label: (i + 1 + ""),
        optimized: false
      })

      mark.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(mark.getTitle());
        infoWindow.open(mark.getMap(), mark);
      })
    }
  }

  displaySingleRoute(directionsService: google.maps.DirectionsService, directionsRenderer: google.maps.DirectionsRenderer) {

    if (this.origin && this.destination) {

      directionsService.route(
        {
          origin: this.origin,
          destination: this.destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response) {
            //console.log(response);
            directionsRenderer.setDirections(response);
            const route = response.routes[0];


            // For each route, display summary information.
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    } else {
      setTimeout(() => {
        this.displaySingleRoute(directionsService, directionsRenderer);
      }, 1000);
    }
  }

  calculateRoute() {

    var count = 0;

    var loc: Loc;
    const directionsService = new google.maps.DirectionsService();
    console.log("----------------------Origin---------------------");
    console.log(this.origin);
    let tempOrigin = this.origin;
    for (var i = 0; i < this.markerList.length; i++) {
      const tempWaypoints: google.maps.DirectionsWaypoint[] = [];

      let tempDestination = {
        lat: this.markerList[i].location.coordinates[0],
        lng: this.markerList[i].location.coordinates[1]
      };


      //console.log(this.markerList.length);
      for (var j = 0; j < this.markerList.length; j++) {
        //console.log(this.markerList[j]);
        if (i == j) {
          continue;
        }

        loc = {
          location: {
            lat: this.markerList[j].location.coordinates[0],
            lng: this.markerList[j].location.coordinates[1]
          },
          stopover: true
        }
        tempWaypoints.push(loc);

      }
      // var tempBool = false;

      var route;
      directionsService.route(
        {
          origin: tempOrigin,
          destination: tempDestination,
          waypoints: tempWaypoints,
          optimizeWaypoints: false,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response) {

            //console.log(response);
            route = response.routes[0];

            let tempTime = 0;
            //console.log(route);
            for (var k = 0; k < route.legs.length; k++) {
              tempTime += route.legs[k].duration.value;
            }

            if (this.minTime == null || this.minTime > tempTime) {
              this.tempOptimalRoute = route.waypoint_order;
              this.minTime = tempTime;
              this.destNum = count;
            }

            // console.log(count++);
            // console.log("Time : " + tempTime);
            // console.log("Route : " + route.waypoint_order);

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

      for (var i = 0; i < this.tempOptimalRoute.length; i++) {
        if (this.tempOptimalRoute[i] >= this.destNum) {
          this.tempOptimalRoute[i]++;
        }
        this.optimalRoute.push(this.tempOptimalRoute[i]);
      }
      this.optimalRoute.push(this.destNum);

      //console.log(this.optimalRoute);

      this.updateQueueNumber();
    }, 2000);
  }

  updateQueueNumber() {
    for (var i = 0; i < this.markerList.length; i++) {
      let data = {
        cust_id: this.markerList[this.optimalRoute[i]].cust_id,
        itinerary_id: this.currentItinerary,
        queue_number: i
      }
      //console.log(data);
      this.taskAssignmentService.updateQueueNumber(data).subscribe((res) => {
        try {
          console.log(res);
        } catch (exception) {
          alert("Updating Optimal Route Error...!");
        }

      });
    }
  }



  calculateAndDisplayRoute(directionsService: google.maps.DirectionsService, directionsRenderer: google.maps.DirectionsRenderer) {

    if (this.origin && this.destination) {

      directionsService.route(
        {
          origin: this.origin,
          destination: this.destination,
          waypoints: this.waypoints,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response) {
            //console.log(response);
            directionsRenderer.setDirections(response);
            const route = response.routes[0];


            // For each route, display summary information.
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    } else {
      setTimeout(() => {
        this.calculateAndDisplayRoute(directionsService, directionsRenderer);
      }, 1000);
    }
  }


  // trackMe() {
  //   if (navigator.geolocation) {
  //     this.isTracking = true;
  //     navigator.geolocation.watchPosition((position) => {
  //       this.liveLat = position.coords.latitude;
  //       this.liveLng = position.coords.longitude;

  //       //var locData;

  //       if (this.user && this.user.userid) {
  //         this.geo.get(this.user.userid.toString()).then(res => {
  //           console.log(res);
  //           if (res) {
  //             var angle;
  //             if (this.liveLat === res.coordinates.lat && this.liveLng === res.coordinates.lng) {
  //               angle = res.angle;
  //             } else {
  //               angle = Math.atan2(this.liveLng - res.coordinates.lng, this.liveLat - res.coordinates.lat) * 180 / Math.PI
  //             }
  //             console.log(angle);
  //             this.geo.update(this.user.userid.toString(), { userName: this.user.first_name.toString(), coordinates: { lat: this.liveLat, lng: this.liveLng }, angle: angle });

  //           } else {
  //             console.log("creating")
  //             this.liveLocation = {
  //               userName: this.user.first_name.toString(),
  //               coordinates: { lat: this.liveLat, lng: this.liveLng },
  //               angle: 0
  //             }
  //             this.geo.update(this.user.userid.toString(), this.liveLocation);
  //           }
  //         })
  //       }





  //       console.log(position);
  //       //this.showTrackingPosition(position);
  //     });
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }


  // showTrackingPosition(position) {
  //   console.log(`tracking postion:  ${position.coords.latitude} - ${position.coords.longitude}`);
  //   this.liveLat = position.coords.latitude;
  //   this.liveLng = position.coords.longitude;

  //   let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //   this.map.panTo(location);

  //   if (!this.marker) {
  //     this.marker = new google.maps.Marker({
  //       position: location,
  //       map: this.map,
  //       title: 'Got you!'
  //     });
  //   }
  //   else {
  //     this.marker.setPosition(location);
  //   }
  // }

  showTrackingPosition() {

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },
      }
    );

    const infoWindow = new google.maps.InfoWindow();

    console.log("tracking position")



    this.geo.getAll().valueChanges().subscribe(res => {
      console.log(res);
      if (this.liveMarkers) {
        for (var i = 0; i < this.liveMarkers.length; i++) {
          this.liveMarkers[i].setMap(null);
        }
        //this.liveMarkers=[];
      }

      for (var i = 0; i < res.length; i++) {
        var icon = { // car icon
          path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
          scale: 0.4,
          fillColor: "#427af4", //<-- Car Color
          fillOpacity: 1,
          rotation: res[i].angle,
          strokeWeight: 1,
          anchor: new google.maps.Point(0, 5),
        };
        this.liveMarkers.push(
          new google.maps.Marker({
            position: { lat: res[i].coordinates.lat, lng: res[i].coordinates.lng },
            map,
            icon: icon,
            title: res[i].userName,
            optimized: false
          })
        )

        // 
        //this.liveMarkers.push(mark);
        //console.log(this.liveMarkers[i]);

        // this.liveMarkers[i].addListener("click", () => {
        //   infoWindow.close();
        //   infoWindow.setContent("hello");
        //   infoWindow.open(map, this.liveMarkers[i]);
        // })

      }

    });
  }

  showTALocation() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },
      }
    );


    var temp = new google.maps.Marker;
    var isNotExpired: boolean = false;


    this.geo.getLoc(this.TAAgent).valueChanges().subscribe(res => {


      temp.setMap(null);

      this.agentLocationService.getAgentLocation(this.uniqueKey).subscribe(res2 => {
        console.log(res2);
        isNotExpired = res2.status;

        if (!isNotExpired) {
          alert("Live location is expired...!");
          return;
        }
      })


      if (!res) {
        alert(this.TAAgent + " Travel Agent is Offline");
        return;
      }

      var icon = { // car icon
        path: 'M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805',
        scale: 0.4,
        fillColor: "#427af4", //<-- Car Color
        fillOpacity: 1,
        rotation: res.angle,
        strokeWeight: 1,
        anchor: new google.maps.Point(0, 5),
      };

      temp = new google.maps.Marker({
        position: { lat: res.coordinates.lat, lng: res.coordinates.lng },
        map,
        icon: icon,
        title: res.userName,
        optimized: false
      })
    })
    // this.geo.get(this.user.userid.toString()).then(res=>{


    // });

  }

  pinLocation() {

    let pinnedLoc:PointLoc;

    console.log("Pin Location called")
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },


      }
    );

    let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: { lat: 7.928309, lng: 80.5 },
    });

    let marker = new google.maps.Marker
    infoWindow.open(map);

    map.addListener("click", (mapsMouseEvent) => {
      marker.setMap(null);
      infoWindow.close();

      // Create a new InfoWindow.
      // infoWindow = new google.maps.InfoWindow({
      //   position: mapsMouseEvent.latLng,
      // });
      // infoWindow.setContent(
      //   JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      // );
      // infoWindow.open(map);

      marker = new google.maps.Marker({
        draggable:false,
        position: mapsMouseEvent.latLng.toJSON(),
        map,
        title: "pin",
        optimized: false
      })

      //marker.addListener()
      pinnedLoc=mapsMouseEvent.latLng.toJSON()
      console.log(pinnedLoc);

      this.newItemEvent.emit(pinnedLoc);
    });

  }


}



class Loc {
  location: any;
  stopover: boolean;
}

class PointLoc {
  public lat: number=0;
  public lng: number=0;
}

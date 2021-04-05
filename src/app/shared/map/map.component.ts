import { Component, HostListener, Input, OnInit, OnChanges, ViewChild, ElementRef, AfterViewInit, Renderer2, NgZone } from '@angular/core';
import { AllocatedCustomers, Itinerary, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service'
import{TaskAssignmentService} from '../../services/task-assignment/task-assignment.service'

import {MapsAPILoader } from '@agm/core'

import { DataService } from '../../services/data/data.service'
import { Subscription } from 'rxjs'



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() modeSignal: string;
  @Input() markerList: AllocatedCustomers[] = [];
  @Input() currentItinerary : Itinerary;

  //--------------to change map size dynamically---------------
  @ViewChild('AgmMap') agmMap: any;
  @ViewChild('wrapper') wrapper: ElementRef;
  //---------------------Map-----------------------------------
  @ViewChild('map') mapElement: any;
  map: google.maps.Map;

  tempOptimalRoute = [];
   minTime: number = null;
  destNum: number;

  optimalRoute =[];

  alert:any;

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

  @ViewChild('search')
  public searchElementRef: ElementRef;

  @HostListener('window:resize')
  onWindowResize() {
    this.onResize();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    if (this.modeSignal = modeSignalStatus.singlePathMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 400;
      } else {
        this.widthReduce = 150;
      }
    } else if (this.modeSignal = modeSignalStatus.directionMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 300;
      } else {
        this.widthReduce = 5;
      }
    }
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'width',
      (window.innerWidth - this.widthReduce) + 'px'
    );
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      (window.innerHeight - this.heightReduce) + 'px'
    );

    // this.agmMap.triggerResize().then(() =>
    //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));
  }

  ngOnChanges() {

  }


  onResize() {
    // resize the container for the google map
    if (this.modeSignal = modeSignalStatus.singlePathMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 400;
      } else {
        this.widthReduce = 150;
      }
    } else if (this.modeSignal = modeSignalStatus.directionMode) {
      if (this.isShowSidebar) {
        this.widthReduce = 300;
      } else {
        this.widthReduce = 5;
      }
    }

    this.renderer.setStyle(
      this.wrapper.nativeElement, 'width',
      (window.innerWidth - this.widthReduce) + 'px'
    );
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      (window.innerHeight - this.heightReduce) + 'px'
    );
    // recenters the map to the resized area.
    // this.agmMap.triggerResize().then(() =>
    //   this.agmMap._mapsWrapper.setCenter({ lat: this.centerLat, lng: this.centerLng }));


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
    private ngZone: NgZone, private data: DataService,private taskAssignmentService:TaskAssignmentService) {
    //this.trackMe();
  }

  ngOnInit(): void {
    //console.log("marker list"+JSON.stringify(this.markerList));
    //this.trackMe();
    this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar)

    // this.initMap();
    //this.getSingleDirection();
    

  

    console.log(this.modeSignal);
    switch (this.modeSignal) {
      case "directionMode": this.getDirections(); break;
      case "markerMode": this.getMarkers(); break;
      case "singlePathMode": this.getSingleDirection(); break;
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



  getDirections() {
    var loc: Loc;
    var i: number;

    if (this.markerList && this.markerList[0] && this.markerList[0].location && this.markerList[0].location.coordinates) {

      // this.origin = {
      //   lat: this.currentLat,
      //   lng: this.currentLng
      // };

      this.origin = {
        lat: 6.879277,
        lng: 79.918083
      };


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
        navigator.geolocation.getCurrentPosition((position) => {
  
          this.currentLat = position.coords.latitude;
          this.currentLng = position.coords.longitude;
  
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

    
    switch (this.modeSignal) {
      case "directionMode": this.calculateAndDisplayRoute(directionsService, directionsRenderer);; break;
      case "singlePathMode": this.displaySingleRoute(directionsService, directionsRenderer); break;
      default: console.log("default Case Triggered");
    }

  }

  displayMarkers(){

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 8,
        center: { lat: 7.928309, lng: 80.5 },
      }
    );

    const infoWindow = new google.maps.InfoWindow();
    
    for(var i=0;i<this.markers.length;i++){
      const mark = new google.maps.Marker({
        position:this.markers[i],
        map,
        title: this.markerList[i].name.first_name+" "+this.markerList[i].name.last_name,
        label:(i+1+""),
        optimized:false
      })

      mark.addListener("click",()=>{
        infoWindow.close();
        infoWindow.setContent(mark.getTitle());
        infoWindow.open(mark.getMap(),mark);
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

      for(var i=0;i<this.tempOptimalRoute.length;i++){
        if(this.tempOptimalRoute[i]>=this.destNum){
          this.tempOptimalRoute[i]++;
        }
        this.optimalRoute.push(this.tempOptimalRoute[i]);
      }
      this.optimalRoute.push(this.destNum);

      //console.log(this.optimalRoute);

      this.updateQueueNumber();
    }, 2000);
  }

  updateQueueNumber(){
    for(var i=0;i<this.markerList.length;i++){
      let data={
        cust_id:this.markerList[this.optimalRoute[i]].cust_id,
        itinerary_id:this.currentItinerary,
        queue_number:i
      }
      //console.log(data);
      this.taskAssignmentService.updateQueueNumber(data).subscribe((res)=>{
        try{
          console.log(res);
        }catch(exception){
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

}



class Loc {
  location: any;
  stopover: boolean;
}

class PointLoc {
  public lat: number;
  public lng: number;
}

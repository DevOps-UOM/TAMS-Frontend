import { Component, HostListener, Input, OnInit, OnChanges, ViewChild,ElementRef ,AfterViewInit,Renderer2,NgZone   } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service'

import {MapsAPILoader} from '@agm/core'

import { DataService } from '../../services/data/data.service'
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit,AfterViewInit {
  @Input() modeSignal: string;
  @Input() markerList: AllocatedCustomers[] = [];


  //--------------to change map size dynamically---------------
  @ViewChild('AgmMap') agmMap: any;                        
  @ViewChild('wrapper') wrapper: ElementRef;
  //-----------------------------------------------------------
  
public latitude: number=7.928309;
  public longitude: number=80.5;
  private centerLat: number=7.928309;
  private centerLng: number=80.5;
  public zoom: number=8;

  map_width:number;

  private changeLat: number=7.928309;
  private changeLng: number=80.5;

  isShowSidebar:boolean;
  subscription: Subscription;

  currentLocaionIcon = '../../../assets/images/ic_ta_location.svg';
  customerLocationIcon = '../../../assets/images/ic_customer_location.svg';

  //lat: number = 7.928309;
  //lng: number = 80.5;

  address: string;
  private geoCoder;

  selectedCustomerId:String;
  @Input() selectedCustomer:AllocatedCustomers;

  currentLat: number;
  currentLng: number;
  isTracking:boolean;
  
  widthReduce:number=0;
  heightReduce:number=150;

  origin: any;
  destination: any;
  waypoints: Loc[] = [];

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
    if(this.modeSignal=modeSignalStatus.singlePathMode){
      if(this.isShowSidebar){
        this.widthReduce=350;
      }else{
        this.widthReduce=110;
      }
    }else if(this.modeSignal=modeSignalStatus.markerMode){
      if(this.isShowSidebar){
        this.widthReduce=100;
      }else{
        this.widthReduce=5;
      }
    }
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'width',
      (window.innerWidth-this.widthReduce) + 'px'
    );
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      (window.innerHeight-this.heightReduce) + 'px'
    );
    
    this.agmMap.triggerResize().then(() =>  
       this.agmMap._mapsWrapper.setCenter({lat: this.centerLat, lng: this.centerLng}));
  }

  ngOnChanges(){
    
  }


  onResize() {
    // resize the container for the google map
    if(this.modeSignal=modeSignalStatus.singlePathMode){
      if(this.isShowSidebar){
        this.widthReduce=350;
      }else{
        this.widthReduce=110;
      }
    }else if(this.modeSignal=modeSignalStatus.markerMode){
      if(this.isShowSidebar){
        this.widthReduce=100;
      }else{
        this.widthReduce=5;
      }
    }
    
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'width',
      (window.innerWidth-this.widthReduce) + 'px'
    );
    this.renderer.setStyle(
      this.wrapper.nativeElement, 'height',
      (window.innerHeight-this.heightReduce) + 'px'
    );
    // recenters the map to the resized area.
    this.agmMap.triggerResize().then(() =>  
       this.agmMap._mapsWrapper.setCenter({lat: this.centerLat, lng: this.centerLng}));
       

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

  constructor(private itineraryService: ItineraryService,private renderer:Renderer2,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, private data: DataService) {
    //this.trackMe();
  }

  ngOnInit(): void {
    //console.log("marker list"+JSON.stringify(this.markerList));
    //this.trackMe();
    this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar)
    //this.getSingleDirection();

    

    console.log(this.modeSignal);
    switch (this.modeSignal) {
      case "directionMode": this.getDirections(); break;
      case "markerMode": this.getMarkers(); break;
      case "singlePathMode": this.getSingleDirection();break;
      default: console.log("default Case Triggered");
    }
  }

  getSingleDirection(){
   // this.trackMe();
   this.mapsAPILoader.load().then(() => {
    this.setCurrentLocation();
    this.geoCoder = new google.maps.Geocoder;
    
  });
  setTimeout(() => {  
    this.origin = {
      lat:this.currentLat,
      lng: this.currentLng
    };

    this.destination = {
      lat: this.selectedCustomer.location.coordinates[0],
      lng: this.selectedCustomer.location.coordinates[1]
    };
    console.log(this.currentLat+" "+this.currentLng);
   }, 2000);


    
  }



  getDirections() {
    var loc: Loc;
    var i: number;

    this.origin = {
      lat: this.markerList[0].location.coordinates[0],
      lng: this.markerList[0].location.coordinates[1]
    };
    
    for (i = 1; i < this.markerList.length; i++) {
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
      lat: this.markerList[0].location.coordinates[0],
      lng: this.markerList[0].location.coordinates[1]
    };
    console.log(this.origin);
    console.log(this.destination);
  }

  getMarkers() {
    for (var i = 0; i < this.markerList.length; i++) {
      this.markers.push({
        lat: this.markerList[i].location.coordinates[0],
        lng: this.markerList[i].location.coordinates[1]
      });
    }

    console.log(this.markers);
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

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.currentLat = position.coords.latitude;
        this.currentLng = position.coords.longitude;
        //this.zoom = 8;
        //this.getAddress(this.currentLat, this.currentLng);
      });
    }
    console.log(this.currentLat+" "+this.currentLng);
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
  
}



class Loc {
  location: any;
  stopover: boolean;
}

class PointLoc {
  public lat: number;
  public lng: number;
}

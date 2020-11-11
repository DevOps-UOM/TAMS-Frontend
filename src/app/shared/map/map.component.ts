import { Component, Input, OnInit } from '@angular/core';
import { AllocatedCustomers } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() mapHeight: number;
  @Input() mapWidth: number;
  @Input() modeSignal: string;
  @Input() markerList: AllocatedCustomers[] = [];

  currentLocaionIcon = '../../../assets/images/ic_ta_location.svg';
  customerLocationIcon = '../../../assets/images/ic_customer_location.svg';

  lat: number = 7.928309;
  lng: number = 80.5;
  zoom: number = 7.5;

  currentLat: number;
  currentLng: number;
  isTracking:boolean;
  
  origin: any;
  destination: any;
  waypoints: Loc[] = [];

  markers: PointLoc[] = [];

  constructor(private itineraryService: ItineraryService) {
    this.trackMe();
  }

  ngOnInit(): void {
    //console.log("marker list"+JSON.stringify(this.markerList));
    console.log(this.modeSignal);
    switch (this.modeSignal) {
      case "directionMode": this.getDirections(); break;
      case "markerMode": this.getMarkers(); break;
      default: console.log("default Case Triggered");
    }
  }


  getDirections() {
    var loc: Loc;
    var i: number;

    this.origin = {
      lat: this.markerList[0].location.coordinates[0],
      lng: this.markerList[0].location.coordinates[1]
    };
    for (i = 1; i < this.markerList.length - 1; i++) {
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

  getMarkers() {
    for (var i = 0; i < this.markerList.length; i++) {
      this.markers.push({
        lat: this.markerList[i].location.coordinates[0],
        lng: this.markerList[i].location.coordinates[1]
      });
    }
  }

  trackMe() {
    if (navigator.geolocation) {
      this.isTracking = true;
      navigator.geolocation.watchPosition((position) => {
        this.currentLng = +position.coords.longitude;
        this.currentLat = +position.coords.latitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
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

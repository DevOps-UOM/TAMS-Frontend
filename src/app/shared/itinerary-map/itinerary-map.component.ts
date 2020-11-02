import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary-map',
  templateUrl: './itinerary-map.component.html',
  styleUrls: ['./itinerary-map.component.css']
})
export class ItineraryMapComponent implements OnInit {
  @Input() mapHeight:number;
  @Input() mapWidth:number;

  lat:number=7.928309;
  lng:number=80.5;
  zoom:number= 7.5;


  markers:marker[]=[
    {
      name:'Customer 1',
      lat:6.878664,
      lng:79.87633
    },
    {
      name:'Customer 2',
      lat:6.898998, 
      lng:79.860516
    },
    {
      name:'Customer 3',
      lat:6.915985, 
      lng:79.862374
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class marker{
  name?:string;
  lat:number;
  lng:number;
}


import { Component, OnInit } from '@angular/core';
import {modeSignalStatus} from '../../models/itinerary.model'

@Component({
  selector: 'app-ta-map',
  templateUrl: './ta-map.component.html',
  styleUrls: ['./ta-map.component.css']
})
export class TaMapComponent implements OnInit {

  modeSignal:string=modeSignalStatus.liveMode;

  //TravelAgentList[];

  constructor() { }

  ngOnInit(): void {
    console.log("called")
  }

}

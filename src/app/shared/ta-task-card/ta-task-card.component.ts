import { Component, Input, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';

@Component({
  selector: 'app-ta-task-card',
  templateUrl: './ta-task-card.component.html',
  styleUrls: ['./ta-task-card.component.css']
})
export class TaTaskCardComponent implements OnInit {

  @Input() customer: AllocatedCustomers;
  
  private loading: boolean = false;
   
  isShowMap:boolean=false;

  selectedItinerary: any;

  date: Date = new Date("2012-04-23");
  taid: String = "TA001";
  modeSignal:string= modeSignalStatus.singlePathMode;

  

  constructor(private itineraryService: ItineraryService) {

  }

  ngOnInit(){
    
  }

  toggle(){
    this.isShowMap=!this.isShowMap;
  }
}

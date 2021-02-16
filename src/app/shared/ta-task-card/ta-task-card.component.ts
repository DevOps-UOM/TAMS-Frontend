import { Component, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';

@Component({
  selector: 'app-ta-task-card',
  templateUrl: './ta-task-card.component.html',
  styleUrls: ['./ta-task-card.component.css']
})
export class TaTaskCardComponent implements OnInit {

  private loading: boolean = false;
   customerList: AllocatedCustomers[] = [];

  selectedItinerary: any;

  date: Date = new Date("2012-04-23");
  taid: String = "TA001";
  modeSignal:string= modeSignalStatus.directionMode;

  

  constructor(private itineraryService: ItineraryService) {

  }

  ngOnInit(){
    this.getCustomers();
    
  }

 

  getCustomers() {
    this.loading = true;
   try {
    this.itineraryService.getAllocatedCustomers(this.date, this.taid).subscribe((res) => {
      this.loading = false;
     (res.body.data && res.body.data.length>0)? this.customerList = res.body.data : this.customerList=[];
      //console.log("Dataaaa"+JSON.stringify(this.customerList));
    })
     
   } catch (exception) {
     console.log("Recieved Empty Customer List!");
   }
  }
}

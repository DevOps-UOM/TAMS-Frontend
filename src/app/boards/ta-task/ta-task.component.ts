import { Component, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';

@Component({
  selector: 'app-ta-task',
  templateUrl: './ta-task.component.html',
  styleUrls: ['./ta-task.component.css']
})
export class TaTaskComponent implements OnInit {
  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];

 selectedItinerary: any;

 date: Date = new Date("2021-04-05");
 taid: String = "TA001";
 modeSignal:string= modeSignalStatus.markerMode;

 
  constructor(private itineraryService: ItineraryService) { }

  ngOnInit(): void {
    this.getItineraryDetails();
  }

  getItineraryDetails(){
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

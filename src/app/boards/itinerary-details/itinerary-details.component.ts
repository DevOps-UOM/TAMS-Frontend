import { ItineraryService } from './../../services/itinerary/itinerary.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {

  Itineraries: any;
  displayItineraries: any;

  constructor(
    private ItinerariesService: ItineraryService,

  ) { }

  ngOnInit(): void {
    this.loadItineraries();
  }

  loadItineraries(){
    this.ItinerariesService.getItineraries().subscribe(
      res => {
        console.log(res.data);
        this.Itineraries = res.data;
        this.displayItineraries = this.Itineraries;
      },
      error => {

      }
      
    );

  }

      if ( delBtn == true ) {
}

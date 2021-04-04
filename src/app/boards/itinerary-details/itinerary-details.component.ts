import { ItineraryService } from './../../services/itinerary/itinerary.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {

  itineraries: any;
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
        this.itineraries = res.data;
        this.displayItineraries = this.itineraries;
      },
      error => {

      }
      
    );

  }

  onClickReset(search) {
    search.value = null
      this.displayItineraries = this.itineraries;
    }
  
    onSearch(term: any) {
      console.log(moment(term).format('YYYY-MM-DD'));
      console.log(term);
      
      if (term === '') {
        this.displayItineraries = this.itineraries;
      } else {
        this.displayItineraries =  this.itineraries.filter((a) => {
         return moment(a.date).format('YYYY-MM-DD') === term
        });
      }
    }

    onItiDelete(id:string , date: Date){
      var delBtn = confirm(" Do you want to delete ?");
      if ( delBtn == true ) {
      this.ItinerariesService.deleteItinerary(date, id).subscribe((res:any) => {
        this.loadItineraries();
        console.log(id, date);
      } );
    }
  }

}

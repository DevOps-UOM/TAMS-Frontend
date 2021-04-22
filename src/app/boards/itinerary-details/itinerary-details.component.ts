import { ItineraryService } from './../../services/itinerary/itinerary.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddTaskComponent} from "../../shared/add-task/add-task.component";
import {PrintItiDetailsComponent} from "../print-iti-details/print-iti-details.component";

@Component({
  selector: 'app-itinerary-details',
  templateUrl: './itinerary-details.component.html',
  styleUrls: ['./itinerary-details.component.css']
})
export class ItineraryDetailsComponent implements OnInit {

  itineraries: any;
  displayItineraries: any;

  constructor(
    private dialog: MatDialog,
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
  printIti(){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "100%";
    const dialogRef = this.dialog.open(PrintItiDetailsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
    })

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

    // onIdSearch(term: any){
    //   console.log(moment(term));
    //   if(term===""){
    //     this.displayItineraries = this.itineraries;
    //   }
    //   else{
    //     this.displayItineraries= this.itineraries.filter((b) => {
    //       return moment(b.travel_agent_id)===term
    //     } )
    //   }
    // }

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

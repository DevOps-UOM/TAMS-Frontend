import { Component, OnInit } from '@angular/core';
import { AvailabilityServiceService } from 'src/app/services/availability-service.service';
import * as moment from 'moment'

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  availabilities: any;
  displayAvailabilities: any;
  
  constructor(
    private availabilityService: AvailabilityServiceService,

  ) { }

  ngOnInit(): void {
    this.loadAvailability()
  }

  loadAvailability() {
    this.availabilityService.getAllAvailability()
      .subscribe(
        res => {
          this.availabilities = res.data;
          this.displayAvailabilities =  this.availabilities;
        },
        error => {

        }
      );
  }
  onClickReset(search) {
  search.value = null
    this.displayAvailabilities = this.availabilities;
  }

  onSearch(term: any) {
    console.log(moment(term).format('YYYY-MM-DD'));
    console.log(term);
    
    if (term === '') {
      this.displayAvailabilities = this.availabilities;
    } else {
      this.displayAvailabilities =  this.availabilities.filter((a) => {
       return moment(a.date).format('YYYY-MM-DD') === term
      });
    }
  }


}

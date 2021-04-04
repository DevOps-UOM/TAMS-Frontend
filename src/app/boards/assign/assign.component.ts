import { Component, OnInit } from '@angular/core';
import { AvailabilityServiceService } from 'src/app/services/availability-service.service';
import * as moment from 'moment';
import {LeaveService} from '../../services/leave/leave.service';
import { MatEndDate, MatStartDate } from '@angular/material/datepicker';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  availabilities: any;
  displayAvailabilities: any;
  leaves: any;
  displayleaves: any;
  
  constructor(
    private availabilityService: AvailabilityServiceService,
    private leavesService: LeaveService

  ) { }

  ngOnInit(): void {
    this.loadAvailability();
    this.loadleaves();
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

  loadleaves() {
    this.leavesService.getAllleaves()
      .subscribe(
        res => {
          this.leaves = res.data;
          this.displayleaves =  this.leaves;
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

  onSearch2(term: any){
    console.log(moment(term).format('YYYY-MM-DD'));
    console.log(term);
    if (term === ''||(term>=MatStartDate&& term<=MatEndDate)){
      this.displayleaves =this.leaves;
    }else{
      this.displayleaves=this.leaves.filter((a) =>{
        return moment(a.date).format('YYYY-MM-DD') === term
      
    });
  }
}



}

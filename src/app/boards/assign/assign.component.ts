
import { Component, OnInit } from '@angular/core';
import { AvailabilityServiceService } from 'src/app/services/availability-service.service';
import * as moment from 'moment';
import {LeaveService} from '../../services/leave/leave.service';
import { MatEndDate, MatStartDate } from '@angular/material/datepicker';
import {HttpClient} from "@angular/common/http";
import {AssignService} from "../../services/assign/assign.service";
import {Grade} from "../../models/grade.model";
import { environment } from 'src/environments/environment';

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
  date: any;
  searchTerm: any;
  travelAgents = [];

  constructor(
    private http: HttpClient,
    private availabilityService: AvailabilityServiceService,
    private leavesService: LeaveService,
    private assignService: AssignService

  ) { }

  ngOnInit(): void {

    this.loadleaves();
    this.loadAgents();
    this.loadAvailability()

  }

  loadAvailability() {
    this.availabilityService.getAllAvailability()
      .subscribe(
        res => {
          console.log(res.data);
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

  // @ts-ignore
  onSearch(term: any) {
    console.log(moment(term).format('YYYY-MM-DD'));
    console.log(term);

    if (term === '') {
      this.displayAvailabilities = this.availabilities;
    } else {
      this.displayAvailabilities =  this.availabilities.filter((a) => {
        this.date=term;
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

  onAssign(){
    if(this.date){
      let dataArr=[];
      let payload = this.displayAvailabilities.forEach((m) => {
        let obj =  {customer: m.cust_id._id, travel_agent: m.cust_id.default_agent_id._id, iti_date: m.date};
        dataArr.push(obj);
      })
      this.assignService.createAssign(dataArr)
          .subscribe(
            res => {
              console.log(res)
            },
            error => {
            }
          );
    }else{
      alert('select a date first');
    }

  }

  loadAgents(){
    this.http.get<{ status: string, msg: string, data: Grade[] }>(environment.apiBaseUrl+'/ta-agents').subscribe((postData) => {
      this.travelAgents = postData['data'];
      console.log(this.travelAgents);

    });

  }


}

import {Component, OnInit} from '@angular/core';
import {AvailabilityServiceService} from 'src/app/services/availability-service.service';
import * as moment from 'moment';
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
  searchTerm: any;
  travelAgents = [];
  date;
  hasLeave: false;

  constructor(
    private http: HttpClient,
    private availabilityService: AvailabilityServiceService,
    private assignService: AssignService

  ) { }

  ngOnInit(): void {
    this.loadAgents();
    this.loadAvailability();
    // var today = new Date;
    // this.onSearch("2021-06-02");
    // console.log(today.getDate());



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
  onClickReset(search) {
  search.value = null
    this.displayAvailabilities = this.availabilities;
  }

  // @ts-ignore
  onSearch(term: any) {
    console.log(term);

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

  onAssign(){
    if(this.date){
      let dataArr=[];
      let payload = this.displayAvailabilities.forEach((m) => {

        let obj =  {customer: m.cust_id._id, travel_agent: m.cust_id.default_agent_id._id, iti_date: m.date};
        dataArr.push(obj);
      })
      alert('Leave Added!');
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

    });

  }




}

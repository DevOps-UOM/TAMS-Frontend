import {Component, OnInit} from '@angular/core';
import {AvailabilityServiceService} from 'src/app/services/availability-service.service';
import * as moment from 'moment';
import {HttpClient} from "@angular/common/http";
import {AssignService} from "../../services/assign/assign.service";
import {Grade} from "../../models/grade.model";

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


  constructor(
    private http: HttpClient,
    private availabilityService: AvailabilityServiceService,
    private assignService: AssignService

  ) { }

  ngOnInit(): void {
    this.loadAgents();
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

  // @ts-ignore
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

  onAssign(){
    let payload = this.displayAvailabilities.forEach((m) => {
      let obj =  {customer: m.cust_id._id, travel_agent: m.cust_id.default_agent_id._id, iti_date: m.date};
      this.assignService.createAssign(obj)
        .subscribe(
          res => {
            console.log(res)
          },
          error => {

          }
        );
    })


  }

  loadAgents(){
    this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/ta-agents').subscribe((postData) => {
      this.travelAgents = postData['data'];
      console.log(this.travelAgents);

    });

  }




}

import { Component, Input, OnInit, HostListener, ChangeDetectorRef, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus, Itinerary } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { TaskAssignmentService } from '../../services/task-assignment/task-assignment.service'

import { animate, keyframes, transition, trigger, style, state } from '@angular/animations';
import * as kf from './keyframes';

import { DataService } from '../../services/data/data.service'
import { Subscription } from 'rxjs'
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';

import { MapComponent } from "../../shared/map/map.component"
import { AgentLocationService } from 'src/app/services/agent-location/agent-location.service';
import { UserService } from 'src/app/services/user';
import { User } from 'src/app/models/user.model';
import * as moment from 'moment'


@Component({
  selector: 'app-ta-task-card',
  templateUrl: './ta-task-card.component.html',
  styleUrls: ['./ta-task-card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swing', animate(700, keyframes(kf.swing))),
    ]),

  ]
})
export class TaTaskCardComponent implements OnInit {

  //@ViewChild(MapComponent, {static: true}) child: MapComponent;

  @Input() customer: AllocatedCustomers;

  @Output("refresh") refresh: EventEmitter<any> = new EventEmitter();

  color: String;

  isDisabled: boolean = true;

  isShowSidebar: boolean;
  subscription: Subscription;

  animationState: string;

  private loading: boolean = false;

  isShowMap: boolean = false;

  @Input() selectedItinerary: Itinerary;

  date: any = moment(moment().format("YYYY-MM-DD")).toDate();                                       //------------------Change with Today--------------------
  taid: String;

  modeSignal: string = modeSignalStatus.singlePathMode;

  text_width: number;

  private currentStatus: string;
  tasks: any;

  itinerary_id: String;
  cust_id: String;

  isLocationShare: boolean = false;

  user:User;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', [])
  private onResize() {
    this.changeSize();

  }

  changeSize() {
    if (this.isShowSidebar) {
      this.text_width = window.innerWidth - 460;
    } else {
      this.text_width = window.innerWidth - 230;
    }

  }


  constructor(private cd: ChangeDetectorRef,public userService: UserService, private itineraryService: ItineraryService, private data: DataService, private taskAssignmentService: TaskAssignmentService,private agentLocationService:AgentLocationService) {
    this.user=userService.getUserPayload()
    this.taid=this.user.userid

    
    //console.log(new Date());
  }






  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe(isShowSidebar => this.isShowSidebar = isShowSidebar)
    console.log(this.selectedItinerary);

    //console.log(this.customer);
    this.changeSize();
    this.checkStatus();
  }

  toggle() {
    this.isShowMap = !this.isShowMap;

  }




  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }

  checkStatus() {

    
    try{
      var data = {
        agent_id: this.selectedItinerary.travel_agent_id,
        cust_id: this.customer.cust_id
      }

      this.agentLocationService.getAgentLocationValidity(data).subscribe(res=>{
        this.isLocationShare=res.status;
      })
    }catch{
      console.log("Checking Live location status Error");
    }

    try {
      this.taskAssignmentService.getTaskStatus(this.selectedItinerary._id, this.customer.cust_id).subscribe((res) => {

        if (res.data && res.data[0] && res.data[0].status) {
          this.currentStatus = res.data[0].status;
          this.tasks = res.data[0].task;
          console.log(this.tasks);
        }

        if (this.currentStatus == "Completed" || this.currentStatus == "Postponed") {
          this.isDisabled = true;
        } else {
          this.isDisabled = false;
        }

      })
    } catch (exception) {
      console.log("Checking Status Error");
    }
  }

  TaskButton(taskStatus: string) {
    //console.log(this.selectedItinerary);
    //console.log(this.selectedItinerary._id);

    let changeStatus = {
      itinerary_id: this.selectedItinerary._id,
      cust_id: this.customer.cust_id,
      status: taskStatus,
      queue_number: 100
    }


    this.taskAssignmentService.updateTaskStatus(changeStatus).subscribe((res: any) => {
      //console.log(res);
      this.currentStatus = res.data.status;
      //this.cd.detectChanges();
      console.log(res);
      //this.getColor()

      this.refresh.emit();
      if (this.currentStatus == "Completed" || this.currentStatus == "Postponed") {
        this.shareLocation();
        this.isDisabled = true;
      } else {
        //console.log("Called")
        this.stopShareLocation();
        this.isDisabled = false;
      }
      console.log(res.data.status);
    })



  }

  navigate() {
    let stringDestination = "" + this.customer.location.coordinates[0] + "," + this.customer.location.coordinates[1];
    let url = `https://www.google.com/maps/dir/?api=1&destination=${stringDestination}`;
    console.log(url);
    // window.location.href = url;

    window.open(url, "_blank");
  }


  shareLocation() {
    //console.log(this.selectedItinerary)
    let data = {
      travel_agent_id: this.selectedItinerary.travel_agent_id,
      customer_id: this.customer.cust_id
    };

    this.taskAssignmentService.shareLocation(data).subscribe(res => {
      console.log("Sharing location activated");
      this.isLocationShare = true;
      console.log(res);
    })
  }

  stopShareLocation() {
    let data = {
      travel_agent_id: this.selectedItinerary.travel_agent_id,
      customer_id: this.customer.cust_id
    };

    this.taskAssignmentService.expireLocation(data).subscribe(res => {
      this.isLocationShare = false;
      console.log("Sharing location disabled");
    })
  }

  //   let newStudent={
  //     _id:this._id,
  //     stuId:this.stuId,
  //     name:this.stuName
  //   }

  //   this.studentService.updateStudent(newStudent).subscribe((res:any)=>{
  //     this.updateStudent;
  //     this.getStudentList();
  //     this.stuId="";
  //     this.stuName="";
  //   });

  //   this.editMode=false;
  // }

}

import { Component, OnInit ,OnDestroy} from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { Overlay } from '@angular/cdk/overlay';
import { ContentObserver } from '@angular/cdk/observers';
import { UserService } from 'src/app/services/user';
import { User } from 'src/app/models/user.model';
import * as moment from 'moment'


@Component({
  selector: 'app-ta-itinerary-map',
  templateUrl: './ta-itinerary-map.component.html',
  styleUrls: ['./ta-itinerary-map.component.css']
})
export class TAItineraryMapComponent implements OnInit {

  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];

  selectedItinerary: any;

  date: any = moment(moment().format("YYYY-MM-DD")).toDate();
  taid: String;
  modeSignal:string= modeSignalStatus.directionMode;

  user:User

  constructor(private itineraryService: ItineraryService,private userService : UserService) {
    this.user=userService.getUserPayload()
    this.taid=this.user.userid
  }

  ngOnInit(){
    //console.log("called")
    this.getCustomers();
    this.getItineraryDet();
  }

 getItineraryDet(){
   try{

    console.log(this.date);
    console.log(this.taid);

    this.itineraryService.getASingleItinerary(this.date, this.taid).subscribe((res)=>{
      this.selectedItinerary=res.data[0]._id;
      console.log(res);
    })
   }catch(error){
    alert("Error in getting Itinerary Details")
   }
 }

  getCustomers() {
    this.loading = true;
   try {

    console.log(this.date);
    console.log(this.taid);

    this.itineraryService.getAllocatedPendingCustomers(this.date, this.taid).subscribe((res) => {
      this.loading = false;
      console.log(res);

      if(!res.body.status){
        alert("Today, There are no allocated customers for you");
        return;
      }

     (res.body.data && res.body.data.length>0)? this.customerList = res.body.data : this.customerList=[];
      //console.log("Dataaaa"+JSON.stringify(this.customerList));

      
    })
     

   } catch (exception) {
     console.log("Recieved Empty Customer List!");
   }
  }

  // addStudent(){
  //   let newStudent={
  //     stuId:this.stuId,
  //     name:this.stuName
  //   }

  //   this.studentService.addStudents(newStudent).subscribe((res:any)=>{
  //     this.getStudentList();
  //     this.stuId="";
  //     this.stuName="";
  //   });
  // }

  // editStudent(editStudent:any){
  //   this.editMode=true;
  //   this._id=editStudent._id;
  //   this.stuName=editStudent.name;
  //   this.stuId=editStudent.stuId;
  // }

  // updateStudent(){

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

  // deleteStudent(studentId:string){
  //   this.studentService.deleteStudent(studentId).subscribe((res:any)=>{
  //     this.getStudentList();
  //   })
  // }

}

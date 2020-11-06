import { Component, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ta-itinerary-map',
  templateUrl: './ta-itinerary-map.component.html',
  styleUrls: ['./ta-itinerary-map.component.css']
})
export class TAItineraryMapComponent implements OnInit {

  private loading: boolean = false;
   customerList: AllocatedCustomers[] = [];

  selectedItinerary: any;

  date: Date = new Date("2012-04-23");
  taid: String = "TA001";
  modeSignal:string= modeSignalStatus.directionMode;

  constructor(private itineraryService: ItineraryService) {

  }

  ngOnInit(){
    this.getCustomers()
  }

  


  getCustomers() {
    this.loading = true;
   try {
    this.itineraryService.getAllocatedCustomers(this.date, this.taid).subscribe((res) => {
      this.loading = false;
     (res.body.data && res.body.data.length>0)? this.customerList = res.body.data : this.customerList=[];
      //console.log("Dataaaa"+JSON.stringify(this.customerList));
    })
     
   } catch (exception) {
     
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

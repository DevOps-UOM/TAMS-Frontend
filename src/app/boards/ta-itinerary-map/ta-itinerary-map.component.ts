import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';

@Component({
  selector: 'app-ta-itinerary-map',
  templateUrl: './ta-itinerary-map.component.html',
  styleUrls: ['./ta-itinerary-map.component.css']
})
export class TAItineraryMapComponent implements OnInit {

  selectedItinerary: any;
  CustomerList:any;
  date:Date=new Date("2012-04-23");
  taid:String="TA001";

  constructor(private itineraryService: ItineraryService) {

  }

  ngOnInit(): void {

  }

  

  getAllocatedCustomers(){
    this.itineraryService.getAllocatedCustomers(this.date,this.taid).subscribe((res:any)=>{
      this.CustomerList=res.data;
      
    })
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

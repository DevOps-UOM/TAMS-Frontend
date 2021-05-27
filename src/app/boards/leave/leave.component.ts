
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {LeaveService} from '../../services/leave/leave.service';
import {Grade} from "../../models/grade.model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveId = '';
  leaveForm: FormGroup;
  travelAgents: any;
  grade: Grade;

  minDate = new Date();

  leaves: any;
  displayleaves: any;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private leavesService: LeaveService
  ) {
  }

  ngOnInit(): void {
    this.formInstaller();
    this.loadleaves();
    this.loadAgents();
  }
  // tslint:disable-next-line:typedef
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

  loadAgents(){
    this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/ta-agents').subscribe((postData) => {
      this.travelAgents = postData['data'];
      console.log(this.travelAgents);

    });
  }



  // formInstaller(): void {
  //   this.leaveForm = this.fb.group({
  //     travel_agent: ['', Validators.required],
  //     // ta_name: ['', Validators.required],
  //     leave_date: this.fb.group({
  //     start_date: ['', Validators.required],
  //     end_date: ['', Validators.required],
  //     }),
  //     // pod: ['', Validators.required],
  //     note:['', Validators.required]
  //   });
  // }
  formInstaller(): void {
    this.leaveForm = this.fb.group({
      travel_agent: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      note:['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onClickSubmit() {
    console.log(this.leaveForm.value);
    this.leavesService.createleaves(this.leaveForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.loadleaves();
        }, error => {
          console.log(error);
        }
      );
    this.leaveForm.reset();

  }

  onSearch(term: any) {
    console.log(term);
    if (term === '') {
      this.displayleaves = this.leaves;
    } else {
      this.displayleaves =  this.leaves.filter((a) => {
        if(a.ta_id.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return a
        }
      });
    }
  }

  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.leaves.splice(x, 1 );
    }
  }
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });







}

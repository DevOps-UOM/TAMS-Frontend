import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LeaveService} from '../../services/leave/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  leaveId = '';
  leaveForm: FormGroup;
  leaves: any;
  displayleaves: any;
  constructor(
    private fb: FormBuilder,
    private leavesService: LeaveService
  ) {
  }

  ngOnInit(): void {
    this.formInstaller();
    this.loadleaves();
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



  formInstaller(): void {
    this.leaveForm = this.fb.group({
      ta_id: ['', Validators.required],
      ta_name: ['', Validators.required],
      leave_date: ['', Validators.required],
      pod: ['', Validators.required],
      note: ['', Validators.required]
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
        return a.ta_id === term; 
      });
    }
  }

  



}
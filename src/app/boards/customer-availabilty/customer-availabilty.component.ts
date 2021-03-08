import { AddTaskComponent } from './../../shared/add-task/add-task.component';
import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AvailabilityServiceService} from '../../services/availability-service.service'
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-customer-availabilty',
  templateUrl: './customer-availabilty.component.html',
  styleUrls: ['./customer-availabilty.component.css']
})
export class CustomerAvailabiltyComponent implements OnInit {
  
  custId = '';
  availabilityForm: FormGroup;
  availabilities: any;
  displayAvailabilities: any;

  constructor(
    private fb: FormBuilder,
    private availabilityService: AvailabilityServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formInstaller();
    this.loadAvailability();
  }
  // tslint:disable-next-line:typedef
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



  formInstaller(): void {
    this.availabilityForm = this.fb.group({
      cust_id: ['', Validators.required],
      date: ['', Validators.required],
      time_from: ['', Validators.required],
      time_to: ['', Validators.required],
      note: ['', Validators.required],
      task: ['', Validators.required],
      task_duration: ['', Validators.required]
    });
  }
  // tslint:disable-next-line:typedef
  onClickSubmit() {
    console.log(this.availabilityForm.value);
    this.availabilityService.createAvailability(this.availabilityForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.loadAvailability();
        }, error => {
          console.log(error);
        }
      );
    this.availabilityForm.reset();

  }

  onSearch(term: any) {
    console.log(term);
    if (term === '') {
      this.displayAvailabilities = this.availabilities;
    } else {
      this.displayAvailabilities =  this.availabilities.filter((a) => {
        return a.cust_id === term; 
      });
    }
  }

  addTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "30%";
    this.dialog.open(AddTaskComponent, dialogConfig);
  }



}

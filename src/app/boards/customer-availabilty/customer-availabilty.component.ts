import { CustomerService } from './../../services/customer/customer.service';
import { TaskServiceService } from './../../services/task-service.service';
import { AddTaskComponent } from './../../shared/add-task/add-task.component';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AvailabilityServiceService} from '../../services/availability-service.service'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

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
  tasks: any;
  displayTasks: any;
  minDate = new Date();
  customers: any;
  displaycustomers: any;


  constructor(
    private fb: FormBuilder,
    private availabilityService: AvailabilityServiceService,
    private dialog: MatDialog,
    private TaskService: TaskServiceService,
    private customerService: CustomerService,
  ) {}

  ngOnInit(): void {
    this.formInstaller();
    this.loadAvailability();
    this.loadTask();
    this.loadcustomers();
  }
  // tslint:disable-next-line:typedef
  loadcustomers() {
    this.customerService.listAllCustomers()
      .subscribe(
        res => {
          this.customers = res.data;
          console.log(res.data)
        },
        error => {

        }
      );
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

  loadTask() {
    this.TaskService.getAllTask()
      .subscribe(
        res => {
          this.tasks = res.data;
          this.displayTasks =  this.tasks;
        },
        error => {

        }
      );
  }

  formInstaller(): void {
    this.availabilityForm = this.fb.group({
      cust_id: ['', Validators.required],
      date: ['', Validators.required],
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
        if(a.cust_id.cust_id.toLowerCase().indexOf(term.toLowerCase()) > -1) {
          return a
        } 
      });
    }
  }

  addTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "30%";
    const dialogRef = this.dialog.open(AddTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.loadTask()
    })

  }
  





}

import { EditTasksComponent } from './../../shared/edit-tasks/edit-tasks.component';
import { from } from 'rxjs';
import { CustomerService } from './../../services/customer/customer.service';
import { TaskServiceService } from './../../services/task-service.service';
import { AddTaskComponent } from './../../shared/add-task/add-task.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import {AvailabilityServiceService} from '../../services/availability-service.service'
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import * as moment from 'moment';

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
  minDate = moment(moment().format("YYYY-MM-DD")).toDate();
  customers: any;
  displaycustomers: any;
  selected: any;
  selectedValue: any;
  totalDuration: any;
  min = "min"



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

  onOptionsSelected(e){

    var td = 0;
    var y = this.tasks;
    if(this.selectedValue)
    {
      e.toString().split(',').forEach(function(value){
        {
          let x = y.find(o => o._id === value);
           if( x !== undefined){
             td = td + x.task_duration;
           }
         }
      })
    }
    this.totalDuration = td;

    if(this.totalDuration>60){
      this.totalDuration = "More than 1hour"
      this.min = ""
    }else{
      this.min = "min"
    }

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
    console.log(this.minDate)
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

  editTask(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "30%";
    const dialogRef = this.dialog.open(EditTasksComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.loadTask()
    })
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

  onEdit(id: string){

  }

  onDelete(id:string , date: Date){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.availabilityService.deleteAvailability(date, id).subscribe((res:any) => {
      this.loadAvailability();
      console.log(id, date);
    } );
    }

  }





}

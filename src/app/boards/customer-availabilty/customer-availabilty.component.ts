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
  filter : any;
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
  isDisable = false;
  timeColor= "black";
  editColor = null;

  selectedAvailabilityForEdit : any;





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

    if(this.totalDuration==60){
      this.min = "";
      this.totalDuration = " 1hour";
    }else if(this.totalDuration>60){
      this.totalDuration = "More than 1hour";
      this.timeColor = "red";
      this.min = "";
    }else{
      this.timeColor = "black";
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

  clear(){
    this.isDisable= false;
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
      $key: false,
      cust_id: ['', Validators.required],
      date: ['', Validators.required],
      note: ['', Validators.required],
      task: ['', Validators.required],
      task_duration: ['', Validators.required]
    });
  }



  onClickSubmit() {
    this.editColor = null;
    let formValues = this.availabilityForm.value
    const _idCustomer = this.customers.filter(item => item.cust_id === formValues.cust_id)[0]

    console.log("Previous record")
    console.log(formValues)


    formValues = {...formValues, cust_id : _idCustomer._id}

    console.log("updated record **************")
    console.log(formValues)

    if(this.availabilityForm.get('$key').value){
      const _id = this.selectedAvailabilityForEdit._id;
      formValues = {...formValues,_id}
      delete formValues.$key;
      console.log("updated record *************222222222222222*")
      console.log(formValues)
      this.availabilityService.updateAvailability(_id,formValues).subscribe(res=>{
        this.loadAvailability();
        alert("availablity update successful")

      },err=>{
        alert("Somthing went wrong!")
        console.log(err)
      });


    }else{
      // alert("creating")
      this.availabilityService.createAvailability(formValues)
      .subscribe(
        res => {
          // alert("editing")
          console.log( res);
          this.loadAvailability();
          if(res.data == "Availability already created!")
          {
           return alert(res.data)
          }else if(res.data == "Somthing went wrong!") {
            return alert("Somthing went wrong!")
          } return alert("Availability created successfully!")

        }, error => {
          console.log(error);

        }
      );
    }
    this.availabilityForm.reset();
    this.isDisable= false;
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
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "30%";
    const dialogRef = this.dialog.open(AddTaskComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.loadTask()
    })

  }

  onEdit(availability){
    // window.scrollTo(0, 0)

    this.selectedAvailabilityForEdit = availability;
    console.log(this.selectedAvailabilityForEdit)
    this.availabilityForm.setValue({
      $key: true,
      cust_id: availability.cust_id.cust_id,
      date: availability.date,
      note: availability.note,
      task: availability.task,
      task_duration: availability.task_duration,
    });
    this.isDisable = true;

  }



  onDelete(id:string , date: Date){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.availabilityService.deleteAvailability(date, id).subscribe((res:any) => {
      this.loadAvailability();
      console.log(id, date);
      alert("Availability deleted successfully!")
    } );
    }

  }

  onFilter(term: any) {
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

  onClickReset(filter) {
    this.editColor = null;
    filter.value = null
      this.displayAvailabilities = this.availabilities;
    }





}

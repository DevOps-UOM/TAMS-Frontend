import { AllocatedCustomers } from './../../models/itinerary.model';
import { UserServiceService } from './../../services/user-service/user-service.service';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';




@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  customers: AllocatedCustomers[] = [];
  // customers: any;
  displaycustomers: any;
  customerForm: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formInstaller();
    this.loadcustomers();
  }
  // tslint:disable-next-line:typedef
  loadcustomers() {
    this.customerService.listAllCustomers()
      .subscribe(
        res => {
          this.customers = res.data;
          this.displaycustomers =  this.customers = [];
        },
        error => {

        }
      );
  }
  
  formInstaller(): void {
    this.customerForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      cust_id: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', Validators.required],
      nic: ['', Validators.required],
      mobile_number: ['', Validators.required],

    });
  }
  // OnSubmit() {
  //   console.log(this.customerForm.value);
  //   this.customerService.addACustomer(this.customerForm.value)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.loadcustomers();
  //       }, error => {
  //         console.log(error);
  //       }
  //     );
  //   this.customerForm.reset();

  // }

}

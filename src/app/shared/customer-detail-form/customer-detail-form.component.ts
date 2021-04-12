import { AllocatedCustomers } from './../../models/itinerary.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControllService } from 'src/app/services/form-controll.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-detail-form',
  templateUrl: './customer-detail-form.component.html',
  styleUrls: ['./customer-detail-form.component.css']
})
export class CustomerDetailFormComponent {

  searchText: any;
  customerId = '';
  customerForm: FormGroup;
  customers: AllocatedCustomers[] = [];
  displaycustomers: any;

  constructor(

    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,

  ) {}


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
          this.displaycustomers =  this.customers;
          console.log(res.data)
        },
        error => {

        }
      );
  }



  formInstaller(): void {
    this.customerForm = this.fb.group({
      cust_id: ['', Validators.required],
      name: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
      }),
      // location: this.fb.group({
      //   coordinates: ['', Validators.required],
      // }),
      area: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email: ['', Validators.required],
      nic: ['', Validators.required],
      default_agent_id: ['', Validators.required],
    });
  }

  // tslint:disable-next-line:typedef
  OnSubmit() {
    // console.log(this.customerForm.value);
    this.customerService.addACustomer(this.customerForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.loadcustomers();
        }, error => {
          console.log(error);
        }
      );
    this.customerForm.reset();

  }

  // public changeListener(files: FileList){
  //   console.log(files);
  //   if(files && files.length > 0) {
  //      let file : File = files.item(0); 
  //        console.log(file.name);
  //        console.log(file.size);
  //        console.log(file.type);
  //        let reader: FileReader = new FileReader();
  //        reader.readAsText(file);
  //        reader.onload = (e) => {
  //           let csv: string = reader.result as string;
  //           console.log(csv);
  //        }
  //     }
  // }

  // onSearch(term: any) {
  //   console.log(term);
  //   if (term === '') {
  //     this.displaycustomers = this.customers;
  //   } else {
  //     this.displaycustomers =  this.customers.filter((a) => {
  //       return a.ta_id === term; 
  //     });
  //   }
  // }
  
  navigateToProfile(cust_id) {
    this.router.navigate(['./' + cust_id], {relativeTo: this.activatedRoute});
  }


}


import { AllocatedCustomers } from './../../models/itinerary.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

declare var M: any;

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

 
  OnSubmit() {
    // console.log(this.customerForm.value);
    
    this.customerService.addACustomer(this.customerForm.value)
      .subscribe(
        res => {
          console.log(res);
          this.loadcustomers();
          M.toast({ html: 'Saved successfully', classes: 'rounded' });
        }, error => {
          console.log(error);
        }
      );
      this.customerForm.reset();
  }

  // OnSubmit() {
  //     this.customerService.addACustomer(this.customerForm.value).subscribe(res => {
  //       console.log(res);
  //       this.customerForm.reset();
  //       this.refreshCustomerList();
  //       this.loadcustomers();
  //       //M.toast({ html: 'Saved successfully', classes: 'rounded' });
  //     });
    
      
  //     this.customerService.updateACustomer(this.customerForm.value).subscribe((res) => {
  //       console.log(res);
  //       this.customerForm.reset();
  //       this.refreshCustomerList();
  //       this.loadcustomers();
  //       //M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     });
    
  // }

// onSubmit(form: NgForm) {
//     if (form.value.cust_id == "") {
//       this.customerService.addACustomer(form.value).subscribe((res) => {
//         this.customerForm.reset();
//         this.refreshCustomerList();
//         this.loadcustomers();
//         //M.toast({ html: 'Saved successfully', classes: 'rounded' });
//       });
//     }
//     else {
//       this.customerService.updateACustomer(form.value).subscribe((res) => {
//         this.customerForm.reset();
//         this.refreshCustomerList();
//         this.loadcustomers();
//         M.toast({ html: 'Updated successfully', classes: 'rounded' });
//       });
//     }
//   }

  // OnSumbit() {
  //       this.customerService.updateACustomer(this.customerForm.value).subscribe((res) => {
  //         console.log(res);
  //         this.customerForm.reset();
  //         this.refreshCustomerList();
  //         //M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //       });
  //     }

  refreshCustomerList() {
    this.customerService.listAllCustomers().subscribe((res) => {
      this.customerService.customers = res as AllocatedCustomers[];
    });
  }

  onEdit(customer: AllocatedCustomers) {
    if (confirm('Are you sure to update this record ?') == true) {
    this.customerService.selectedCustomer = customer;
    }
  }

  onDelete(cust_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.customerService.deleteACustomer(cust_id).subscribe((res) => {
        this.loadcustomers();
        this.customerForm.reset();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
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

  
  navigateToProfile(cust_id) {
    this.router.navigate(['./' + cust_id], {relativeTo: this.activatedRoute});
  }
}


import { HttpClient } from '@angular/common/http';
import { AllocatedCustomers } from './../../models/itinerary.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControllService } from 'src/app/services/form-controll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from 'src/app/models/grade.model';

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
  travelAgents = [];

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,

  ) {}


  ngOnInit(): void {
    this.formInstaller();
    this.loadcustomers();
    this.refreshCustomerList();
    this.loadAgents();

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
      _id: [''],
      cust_id: ['', Validators.required],
      name: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
      }),
      address: this.fb.group({
        address_line_1: ['', Validators.required],
        address_line_2: ['', Validators.required],
        city: ['', Validators.required],
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
  // OnSubmit() {
  //   // console.log(this.customerForm.value);
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

  OnSubmit() {
    {
     this.customerService.addACustomer(this.customerForm.value).subscribe((res) => {
       this.customerForm.reset();
       this.refreshCustomerList();
       this.loadcustomers();
       //M.toast({ html: 'Saved successfully', classes: 'rounded' });
     });
   }

   {
     this.customerService.updateACustomer(this.customerForm.value).subscribe((res) => {
       this.customerForm.reset();
       this.refreshCustomerList();
       this.loadcustomers();
       //M.toast({ html: 'Updated successfully', classes: 'rounded' });
     });
   }
 }

 refreshCustomerList() {
   this.customerService.listAllCustomers().subscribe((res) => {
     this.customerService.customers = res as AllocatedCustomers[];
   });
 }

 onEdit(customer: AllocatedCustomers) {
   if (confirm('Are you sure to update this record ?') == true){
   const c = {};
   const keysToDrop = ['is_deleted', 'location', '__v']
   Object.keys(customer).forEach(e => {
     if(!keysToDrop.includes(e)) {
       if (typeof customer[e] === 'object' && customer[e]._id) {
         const { _id, ...rest } = customer[e]
         c[e] = rest;
       } else {
         c[e] = customer[e];
       }
     }
   })
   console.log(c);
   this.customerForm.setValue(c);
 }
}

onDelete(cust_id: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.customerService.deleteACustomer(cust_id).subscribe((res) => {
      this.loadcustomers();
      this.customerForm.reset();
      //M.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}


  loadAgents(){
    this.http.get<{ status: string, msg: string, data: Grade[] }>('http://localhost:3000/ta-agents').subscribe((postData) => {
      this.travelAgents = postData['data'];
      console.log(this.travelAgents);
      
    });

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


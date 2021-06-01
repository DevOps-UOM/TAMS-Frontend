import { Coordinates } from './../../models/realtimedb.model';
import { HttpClient } from '@angular/common/http';
import { AllocatedCustomers } from './../../models/itinerary.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControllService } from 'src/app/services/form-controll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from 'src/app/models/grade.model';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Customer, ICustomer } from 'src/app/models/DTO/customer.model';
import { Address } from 'src/app/models/DTO/address.model';
import { Location } from 'src/app/models/DTO/location.model';
import { Name } from 'src/app/models/DTO/name.model';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { PinCustomerComponent } from 'src/app/shared/pin-customer/pin-customer.component';

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

  selectedCustomer: any;
  savingCustomer: ICustomer;

  formCust: any

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private dialog: MatDialog

  ) {
    this.savingCustomer = new Customer();
  }


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
          this.displaycustomers = this.customers;
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

      first_name: ['', Validators.required],
      last_name: ['', Validators.required],

      address: this.fb.group({
        address_line_1: ['', Validators.required],
        address_line_2: ['', Validators.required],
        city: ['', Validators.required],
      }),
      x: ['', Validators.required],
      y: ['', Validators.required],
      type: ['', Validators.required],
      area: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email: ['', Validators.required],
      nic: ['', Validators.required],
      default_agent_id: ['', Validators.required],
    });

    this.customerForm.valueChanges.subscribe(formData => {

      this.formCust = formData;
      console.log(this.formCust)
    })
  }



  coordinates(): FormArray {
    return this.customerForm.get("coordinates") as FormArray
  }

  newCoordinates(): FormGroup {
    return this.fb.group({
      coordinates: this.fb.array([]),
      //x: '',
      //y: ''
    })
  }


  addCoordinates() {
    this.coordinates().push(this.newCoordinates());
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

    if (this.selectedCustomer) {
      // todo :: include this after cust id is getting auto generated
      this.savingCustomer.cust_id = this.selectedCustomer.cust_id;
      this.savingCustomer.is_deleted = this.selectedCustomer.is_deleted;
    }

    if (this.formCust) {
      this.savingCustomer.area = this.formCust.area;
      this.savingCustomer.email = this.formCust.email;
      this.savingCustomer.cust_id = this.formCust.cust_id;
      var cust_address = new Address();
      cust_address.address_line_1 = this.formCust.address.address_line_1;
      cust_address.address_line_2 = this.formCust.address.address_line_2;
      cust_address.city = this.formCust.address.city;

      this.savingCustomer.address = cust_address;

      var cust_location = new Location();
      cust_location.type = "Point";
      cust_location.coordinates = [this.formCust.x, this.formCust.y]
      this.savingCustomer.location = cust_location;

      var cust_name = new Name();
      cust_name.first_name = this.formCust.first_name;
      cust_name.last_name = this.formCust.last_name;
      this.savingCustomer.name = cust_name

      this.savingCustomer.mobile_number = this.formCust.mobile_number;
      this.savingCustomer.nic = this.formCust.nic;
      this.savingCustomer.default_agent_id = this.formCust.default_agent_id;
    }



    console.log(JSON.stringify(this.savingCustomer))

    if (this.selectedCustomer) {
      console.log(this.savingCustomer)
      this.customerService.updateACustomer(this.savingCustomer).subscribe((res) => {
        console.log("inside");
        console.log(res)
        this.clearForm()
        this.loadcustomers();
        this.showSuccess();
      }, err => {
        console.log("error in updating " + err)
      });
    } else {
      this.customerService.addACustomer(this.savingCustomer).subscribe((res) => {
        this.clearForm()
        this.loadcustomers();
        this.showAdd();
      }, err => {
        console.log("error in updating " + err)
      });
    }





  }

  clearForm() {
    this.customerForm.reset();
  }

  // OnSubmit() {
  //   if (this.customerForm.value.cust_id == "") {
  //     this.customerService.updateACustomer(this.customerForm.value).subscribe((res) => {
  //       this.customerForm.reset();
  //       this.loadcustomers();
  //       this.showSuccess();
  //     });
  //   }
  //   else{
  //     this.customerService.addACustomer(this.customerForm.value).subscribe((res) => {
  //       this.customerForm.reset();
  //       this.loadcustomers();
  //       this.showAdd();
  //     });
  //   }
  // }

  refreshCustomerList() {
    this.customerService.listAllCustomers().subscribe((res) => {
      this.customerService.customers = res as AllocatedCustomers[];
    });
  }

  onEdit(customer: AllocatedCustomers) {
    this.selectedCustomer = customer;
    console.log(customer)
    if (confirm('Are you sure to update this record ?') == true) {
      const c = {};
      // const keysToDrop = ['is_deleted', '__v', 'location']
      // Object.keys(customer).forEach(e => {
      //   if (!keysToDrop.includes(e)) {
      //     if (typeof customer[e] === 'object' && customer[e]._id) {
      //       const { _id, ...rest } = customer[e]
      //       c[e] = rest;
      //     } else {
      //       c[e] = customer[e];
      //     }
      //   }
      // })
      console.log(c);
      this.updateProfile(customer);
      // this.customerForm.setValue(c);
    }
  }

  updateProfile(customer) {
    console.log(customer.location.coordinates)
    this.customerForm.patchValue({
      cust_id: customer.cust_id,

      first_name: customer.name.first_name,
      last_name: customer.name.last_name,
      x: customer.location.coordinates[0],
      y: customer.location.coordinates[1],
      type: customer.location.type,
      email: customer.email,
      nic: customer.nic,
      mobile_number: customer.mobile_number,
      address:
      {
        address_line_1: customer.address.address_line_1,
        address_line_2: customer.address.address_line_2,
        city: customer.address.city
      },
      area: customer.area,
      default_agent_id: customer.default_agent_id

    });
  }

  onDelete(cust_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.customerService.deleteACustomer(cust_id).subscribe((res) => {
        this.loadcustomers();
        this.customerForm.reset();
        this.showDelete();
      });
    }
  }

  loadAgents() {
    this.http.get<{ status: string, msg: string, data: Grade[] }>(environment.apiBaseUrl + '/ta-agents').subscribe((postData) => {
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


  navigateToProfile(cust_id) {
    this.router.navigate(['./' + cust_id], { relativeTo: this.activatedRoute });
  }

  showSuccess() {
    this.toastr.info('', 'Updated successfully!');
  }

  showAdd() {
    this.toastr.success('', 'Saved successfully!');
  }

  showDelete() {
    this.toastr.error('', 'Deleted successfully!');
  }

  pinCustomer(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig. width = "50%";
    const dialogRef = this.dialog.open(PinCustomerComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data=>{
      console.log(data)
    })

  }

}
import { AllocatedCustomers } from './../../models/itinerary.model';
import { CustomerService } from './../../services/customer/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer: AllocatedCustomers;
  private sub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      const custId = params['cust_id'];
      this.customerService.findOne(custId).subscribe({
        next: (data) => {
          this.customer = data.data[0] as AllocatedCustomers;
          console.log(this.customer);
        },
        error: (err) => console.log(err),
        complete: () => console.log('Completed')
      });
   });
  
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

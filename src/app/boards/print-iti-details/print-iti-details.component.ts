import { CustomerService } from './../../services/customer/customer.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-print-iti-details',
  templateUrl: './print-iti-details.component.html',
  styleUrls: ['./print-iti-details.component.css']
})
export class PrintItiDetailsComponent implements OnInit {

   details: any;
   customers : any;

  constructor(
    public dialogRef: MatDialogRef<PrintItiDetailsComponent>,@Inject(MAT_DIALOG_DATA)
    public data: any,
    private customerService : CustomerService,
  ) {
    this.details = data;
    console.log(this.details.assigned_customer_id);
    this.customers = this.details._doc.assigned_customer_id;
  }

  ngOnInit(): void {
// cust_id.forEach(element => {
//   //var x = await  get (c001)
//   .subscribe(
//     data =>{
//       this.Custers.push(data);
    // }
  // );

// });
// this.loadItineraries("C001")
  }

  // loadItineraries(id: "C001"){
  //   this.customerService.findOne(id).subscribe(
  //     res => {
  //       this.customers = res.data;
  //       console.log("customers");

  //     },
  //     error => {

  //     }

  //   );

  // }

  toPrint(){
    window.print();
  }

  onClose(){
    this.dialogRef.close();
  }
}

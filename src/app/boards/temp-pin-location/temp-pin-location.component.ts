import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { PinCustomerComponent } from 'src/app/shared/pin-customer/pin-customer.component';

@Component({
  selector: 'app-temp-pin-location',
  templateUrl: './temp-pin-location.component.html',
  styleUrls: ['./temp-pin-location.component.css']
})
export class TempPinLocationComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
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

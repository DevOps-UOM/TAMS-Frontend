import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-print-iti-details',
  templateUrl: './print-iti-details.component.html',
  styleUrls: ['./print-iti-details.component.css']
})
export class PrintItiDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PrintItiDetailsComponent>
  ) {}

  ngOnInit(): void {
  }

  toPrint(){
    window.print();
  }

  onClose(){
    this.dialogRef.close();
  }
}

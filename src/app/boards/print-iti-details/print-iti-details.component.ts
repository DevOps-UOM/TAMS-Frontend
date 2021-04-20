import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-iti-details',
  templateUrl: './print-iti-details.component.html',
  styleUrls: ['./print-iti-details.component.css']
})
export class PrintItiDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toPrint(){
    window.print();
  }

}

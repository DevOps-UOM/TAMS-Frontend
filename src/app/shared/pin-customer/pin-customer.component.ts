import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { modeSignalStatus } from 'src/app/models/itinerary.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pin-customer',
  templateUrl: './pin-customer.component.html',
  styleUrls: ['./pin-customer.component.css']
})
export class PinCustomerComponent implements OnInit {
  @Output()
  modeSignal: string = modeSignalStatus.pinningMode;
  pinnedLocation: PointLoc = new PointLoc();
  notify: EventEmitter<string> = new EventEmitter<string>();


  constructor(
    public dialogRef: MatDialogRef<PinCustomerComponent>
  ) { }

  ngOnInit(): void {

  }

  pinLocation(loc: PointLoc) {
    this.pinnedLocation = loc;

  }

  onClose() {
    this.dialogRef.close(this.pinnedLocation);
  }

  passData() {
    this.notify.emit("Hello");
  }

}

class PointLoc {
  public lat: number = 0;
  public lng: number = 0;
}

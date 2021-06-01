import { StatDashboardService } from './../../services/stat-dashboard/stat-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-ta-itinerary-map',
  templateUrl: './stat-dashboard.component.html',
  styleUrls: ['./stat-dashboard.component.css']
})


export class StatDashboardComponent implements OnInit {

  bestagents: any;
  displaybestagents: any;

  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];

  selectedItinerary: any;

  date: Date = new Date("2012-04-23");
  taid: String = "TA001";
  modeSignal: string = modeSignalStatus.markerMode;

  constructor(private statDashboardService: StatDashboardService, private itineraryService: ItineraryService) { }

  ngOnInit() {
    this.getCustomers();
    this.loadBestAgents();

    //   this.sub = this.activatedRoute.params.subscribe(params => {
    //     const userId = params['userid'];
    //     this.statDashboardService.listAllAgents(userId).subscribe({
    //       next: (data) => {
    //         this.bestagents = data;
    //         console.log(this.bestagents);
    //       },
    //       error: (err) => console.log(err),
    //       complete: () => console.log('Completed')
    //     });
    //  });


  }

  loadBestAgents() {
    this.statDashboardService.listAllAgents()
      .subscribe(
        res => {
          this.bestagents = res.data;
          this.displaybestagents =  this.bestagents;
        },
        error => {

        }
      );
  }




  getCustomers() {
    this.loading = true;
    try {
      this.itineraryService.getAllocatedCustomers(this.date, this.taid).subscribe((res) => {
        this.loading = false;
        (res.body.data && res.body.data.length > 0) ? this.customerList = res.body.data : this.customerList = [];
        //console.log("Dataaaa"+JSON.stringify(this.customerList));
      })

    } catch (exception) {
      console.log("Recieved Empty Customer List!");
    }
  }

}

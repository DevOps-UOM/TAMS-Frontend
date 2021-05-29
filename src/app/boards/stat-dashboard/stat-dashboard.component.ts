import { StatDashboardService } from './../../services/stat-dashboard/stat-dashboard.service';
import { Component, OnInit } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import { Overlay } from '@angular/cdk/overlay';
import { ICustomer } from 'src/app/models/DTO/customer.model';

@Component({
  selector: 'app-ta-itinerary-map',
  templateUrl: './stat-dashboard.component.html',
  styleUrls: ['./stat-dashboard.component.css']
})


export class StatDashboardComponent implements OnInit {

  bestagents: any;
  displaybestagents: any;

  mostvisitedcustomers: any;
  displaymostvisitedcustomers: any;

  mostefficientdays: any;
  displaymostefficientdays: any;

  leastefficientdays: any;
  displayleastefficientdays: any;

  dailytaskcount: any;
  displaydailytaskcount: any;

  monthlytaskcount: any;
  displaymonthlytaskcount: any;

  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];

  selectedItinerary: any;

  date: Date = new Date("2012-04-23");
  taid: String = "TA001";
  modeSignal: string = modeSignalStatus.markerMode;

  dailyTaskCount = {
    total: 0,
    completed: 0
  }

  monthlyTaskCount = {
    total: 0,
    completed: 0
  }

  constructor(private itineraryService: ItineraryService, private statDashboardService: StatDashboardService) { }

  ngOnInit() {
    this.getCustomers();
    this.loadBestAgents();
    this.loadMostVisitedCustomers();
    this.loadMostEfficientDays();
    this.loadLeastEfficientDays();
    this.loadDailyTaskCount();
    this.loadMonthlyTaskCount();

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

  loadMostVisitedCustomers() {
    this.statDashboardService.listMostVisitedCustomers()
      .subscribe(
        res => {
          this.mostvisitedcustomers = res.data;
          this.displaymostvisitedcustomers = this.mostvisitedcustomers;
          console.log(this.displaymostvisitedcustomers);
        },
        error => {

        }
      );
  }

  loadMostEfficientDays() {
    this.statDashboardService.listMostEfficientDays()
      .subscribe(
        res => {
          this.mostefficientdays = res.data;
          this.displaymostefficientdays = this.mostefficientdays;
          console.log(this.displaymostefficientdays);
        },
        error => {

        }
      );
  }

  loadLeastEfficientDays() {
    this.statDashboardService.listLeastEfficientDays()
      .subscribe(
        res => {
          this.leastefficientdays = res.data;
          this.displaymostefficientdays = this.leastefficientdays;
          console.log(this.displayleastefficientdays);
        },
        error => {

        }
      );
  }


  loadDailyTaskCount() {
    this.statDashboardService.listDailyTaskCount()
      .subscribe(
        res => {
          this.dailytaskcount = res.data;
          console.log(res);

          this.displaydailytaskcount = this.dailytaskcount;
          console.log(this.displaydailytaskcount);

          this.dailytaskcount.forEach(element => {
            element?.['tasksList'].forEach(task => {
              console.log(task['status']);
              ++this.dailyTaskCount['total']
              if (task['status'] == 'Completed') {
                ++this.dailyTaskCount['completed']
              }
            });
          });
        },
        error => {

        }
      );
  }


  loadMonthlyTaskCount() {
    this.statDashboardService.listMonthlyTaskCount()
      .subscribe(
        res => {
          this.monthlytaskcount = res.data;
          console.log(res);

          this.displaymonthlytaskcount = this.monthlytaskcount;
          console.log(this.displaymonthlytaskcount);

          this.monthlytaskcount.forEach(element => {
            element?.['tasksList'].forEach(task => {
              console.log(task['status']);
              ++this.monthlyTaskCount['total']
              if (task['status'] == 'Completed') {
                ++this.monthlyTaskCount['completed']
              }
            });
          });
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

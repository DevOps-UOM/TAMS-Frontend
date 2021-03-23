import { Component, OnInit,Input } from '@angular/core';
import { AllocatedCustomers, modeSignalStatus,Itinerary } from 'src/app/models/itinerary.model';
import { ItineraryService } from '../../services/itinerary/itinerary.service';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
import { emitWarning } from 'process';

@Component({
  selector: 'app-ta-task',
  templateUrl: './ta-task.component.html',
  styleUrls: ['./ta-task.component.css'],
  animations:[
    trigger('listAnimation',[
      transition('* => *',[
        query(':enter',style({opacity:0}),{optional:true}),

        query(':enter',stagger('300ms',[
          animate('1s ease-in',keyframes([
            style({opacity:0,transform:'translateY(-75px)',offset:0}),
            style({opacity: .5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:1,transform:'translateY(0px)',offset:1})
          ]))
        ]),{optional:true}),
  
        query(':leave',stagger('300ms',[
          animate('1s ease-in',keyframes([
            style({opacity:1,transform:'translateY(0px)',offset:0}),
            style({opacity: .5,transform:'translateY(35px)',offset:0.3}),
            style({opacity:0,transform:'translateY(-75px)',offset:1})
          ]))
        ]),{optional:true})
      ])
      
    ]),
    // trigger('buttonAnim',[
    //   transition(':enter',[
    //     style({opacity:0,transform:'translateY(-75px)'}),
    //     animate(2000,style({opacity:1,transform:'translateY(0px)'}))
    //   ] ),
    //   transition(':leave',[
    //     style({opacity:1,transform:'translateY(0px)'}),
    //     animate(2000,style({opacity:0,transform:'translateY(-75px)'}))
    //   ] )

    // ])
  ]
})
export class TaTaskComponent implements OnInit {
  private loading: boolean = false;
  customerList: AllocatedCustomers[] = [];
  completedList:AllocatedCustomers[]=[];


 selectedItinerary: Itinerary;

 date: Date = new Date("2012-04-23");
 taid: String = "TA001";
 modeSignal:string= modeSignalStatus.markerMode;


 
  constructor(private itineraryService: ItineraryService) { }

  ngOnInit(): void {
    this.getItineraryDetails();
    this.getItinerary();
   
  }

  getItinerary(){
    try{

      this.itineraryService.getASingleItinerary(this.date,this.taid).subscribe((res)=>{
        
        this.selectedItinerary = res.data[0];
        console.log(this.selectedItinerary);
        
      })
      
    }catch (exception) {
      console.log("Recieved Empty Itinerary");
    }
    
  }

  getItineraryDetails(){
    this.loading = true;
    try {
     this.itineraryService.getAllocatedCustomers(this.date, this.taid).subscribe((res) => {
       this.loading = false;
      (res.body.data && res.body.data.length>0)? this.customerList = res.body.data : this.customerList=[];
       //console.log("Dataaaa"+JSON.stringify(this.customerList));
     })
      
    } catch (exception) {
      console.log("Recieved Empty Customer List!");
    }
  }

  refresh(){
    this.getItinerary();
  }

}

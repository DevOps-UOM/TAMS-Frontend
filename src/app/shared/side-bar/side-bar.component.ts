
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations:[
    trigger('fade',[
      //state(),
      transition('void => *',[
        style({opacity:0.3,transform:'translateX(-50px)'}),
        animate(500,style({opacity:1,transform:'translateX(0px)'}))
      ] )
    ])
  ]
})
export class SideBarComponent implements OnInit {

  TAButton:boolean=false;
  panelOpenState = false;

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }
  callScreen(screenName) {
    console.log("called here" + screenName);
    switch (screenName) {
      case 'Itinerary Map':
        this.router.navigate(['/boards/itinerary-map']);
        break;
      case 'Leaves':
        this.router.navigate(['/boards/leave']);
        break;
      case 'Itinerary Task':
        this.router.navigate(['/boards/itinerary-task']);
        break;
      case 'Customer Availability':
        this.router.navigate(['/boards/customer-availability']);
        break;
      case 'User Management':
        this.router.navigate(["/boards/admin-user-management"])
        break;

        case 'Assign':
          this.router.navigate(['/boards/assign']);
          break;

      default:
        this.router.navigate(['/boards/home']);
        break;
    }

  }

  CollapseChange(buttonName){
    switch(buttonName){
      case 'TA':
        
        console.log("sdsds");
        break;
    }
  }

  
}


// interface Category {
//   name: string;
//   children?: Category[];
// }

// const TREE_DATA: Category[] = [
//   {
//     name: 'Dashboard'
//   }, 
//   {
//     name: 'Customers',
//     children: [
//       {
//         name: 'Assign Customers'
//       }
//     ]
//   },
//   {
//     name: 'Call Center Agents'
//   },
//   {
//     name: 'Travel Agents',
//     children:[
//       {
//         name:'Profiles'
//       },
//       {
//         name: 'Travel Itinerary'
//       },
//       {
//         name: 'Leaves'
//       }
//     ]
//   },
//   {
//     name:'About'
//   }
// ];
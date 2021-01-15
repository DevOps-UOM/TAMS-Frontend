import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

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

      default:
        this.router.navigate(['/boards/home']);
        break;
    }

  }
}

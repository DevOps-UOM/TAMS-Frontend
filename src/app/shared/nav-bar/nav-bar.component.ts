import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  callScreen(screenName) {
    console.log("called here")
    switch (screenName) {
      case 'Itinerary Map':
        this.router.navigate(['/boards/itinerary-map']);
        break;
      case 'Leaves':
        this.router.navigate(['/boards/leave']);
        break;

      default:
        this.router.navigate(['boards/home']);
        break;
    }

  }
}

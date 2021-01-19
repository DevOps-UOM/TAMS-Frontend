
import { Component, OnInit,HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() burger:boolean;

  constructor(
    private router: Router
  ) { }

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
  userMenu() {
    document.getElementById("userMenuDropdown").classList.toggle("show");
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target == document.getElementById("user-det"))) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}

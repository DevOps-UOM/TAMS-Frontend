
import { Component, OnInit,HostListener, Input,EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations:[
    trigger('fade',[
      //state(),
      transition('void => *',[
        style({opacity:0.3,transform:'translateY(-50px)'}),
        animate(1000,style({opacity:1,transform:'translateX(0px)'}))
      ] )
    ])
  ]
})
export class NavBarComponent implements OnInit {

 // @Input() burger:boolean;

  @Output() burgerBooleanEmitter: EventEmitter<boolean> = new EventEmitter()
  burgerBoolean:boolean=false;

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

  BurgerClick(){
    this.burgerBoolean=!this.burgerBoolean;
    this.burgerBooleanEmitter.emit(this.burgerBoolean);
  }
}


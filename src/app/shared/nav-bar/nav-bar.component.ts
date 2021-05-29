import { User } from './../../models/user.model';
import {Role} from './../../models/role.model'

import { Component, OnInit,HostListener, Input,EventEmitter, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

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
  user:User;
  role:string;

  constructor(
    public userService: UserService,
    private router: Router
  ) { 
    this.user = userService.getUserPayload();
    if(this.user && this.user.role){
      switch(this.user.role){
        case Role.ca : this.role="Call Center Agent";break;
        case Role.ta : this.role="Travel Agent";break;
        case Role.Admin : this.role="Admin";break;
      }
    }
    
  }

  ngOnInit(): void {
    
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

  profile(){
    this.router.navigate(['/userprofile']);
  }

  onLogout(){
    this.userService.logout();
  }
}


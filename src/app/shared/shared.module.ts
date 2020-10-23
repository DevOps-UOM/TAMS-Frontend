import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [MapComponent, NavBarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    MapComponent,NavBarComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {AgmCoreModule}from '@agm/core';


@NgModule({
  declarations: [MapComponent, NavBarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAnQIrbexL15BeN97xOY7nOjcQkJZfJsig'
    })
  ],
  exports:[
    MapComponent,NavBarComponent
  ]
})
export class SharedModule { }


//AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0
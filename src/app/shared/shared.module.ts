import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {AgmCoreModule}from '@agm/core';
import { ItineraryMapComponent } from './itinerary-map/itinerary-map.component';


@NgModule({
  declarations: [ NavBarComponent, ItineraryMapComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAnQIrbexL15BeN97xOY7nOjcQkJZfJsig'
    })
  ],
  exports:[
    NavBarComponent,ItineraryMapComponent
  ]
})
export class SharedModule { }


//AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0
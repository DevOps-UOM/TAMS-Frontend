import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {AgmCoreModule}from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [ NavBarComponent, MapComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0'
    }),
    AgmDirectionModule
  ],
  exports:[
    NavBarComponent,MapComponent
  ]
})
export class SharedModule { }


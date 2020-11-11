import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapComponent } from './map/map.component';
import { TaTaskCardComponent } from './ta-task-card/ta-task-card.component';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window'

@NgModule({
  declarations: [NavBarComponent, MapComponent, TaTaskCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0'
    }),
    AgmDirectionModule,
    AgmSnazzyInfoWindowModule
  ],
  exports: [
    NavBarComponent, MapComponent
  ]
})
export class SharedModule { }


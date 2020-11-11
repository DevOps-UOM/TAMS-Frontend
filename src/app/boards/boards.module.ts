import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { TaTaskComponent } from './ta-task/ta-task.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/itinerary-map  ',
    pathMatch: 'full'
  },

  {
    path: 'itinerary-map',
    component: TAItineraryMapComponent
  },
  {
    path: 'itinerary-task',
    component:TaTaskComponent
  }
]


@NgModule({
  declarations: [ TAItineraryMapComponent, TaTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSliderModule,
    OverlayModule
  ]
})
export class BoardsModule { }

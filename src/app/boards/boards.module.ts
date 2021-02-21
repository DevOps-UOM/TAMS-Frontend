import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { LeaveComponent } from './leave/leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TaTaskComponent } from './ta-task/ta-task.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomerAvailabiltyComponent } from './customer-availabilty/customer-availabilty.component';

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
    path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'itinerary-task',
    component: TaTaskComponent
  },
  {
    path: 'customer-availability',
    component: CustomerAvailabiltyComponent
  }
]


@NgModule({
  declarations: [ TAItineraryMapComponent, TaTaskComponent,LeaveComponent, CustomerAvailabiltyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSliderModule,
    OverlayModule
  ]
})
export class BoardsModule { }

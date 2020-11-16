import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { ItineraryMapComponent } from './itinerary-map/itinerary-map.component';
import { MapComponent } from '../shared/map/map.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LeaveComponent } from './leave/leave.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/itinerary-map  ',
    pathMatch: 'full'
  },

  {
    path: 'itinerary-map',
    component: ItineraryMapComponent
  }
]


@NgModule({
  declarations: [ItineraryMapComponent, LeaveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule
  ]
})
export class BoardsModule { }

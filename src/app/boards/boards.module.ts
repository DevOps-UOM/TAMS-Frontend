import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { TaTaskComponent } from './ta-task/ta-task.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards/itinerary-map  ',
    pathMatch: 'full'
  },

  {
    path: 'itinerary-map',
    component: TAItineraryMapComponent
  }
]


@NgModule({
  declarations: [ TAItineraryMapComponent, TaTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule
  ]
})
export class BoardsModule { }

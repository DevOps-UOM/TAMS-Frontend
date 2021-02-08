// import { FormControllService } from './../services/form-controll.service';
// import { TaAgentsTableComponent } from './../shared/ta-agents-table/ta-agents-table.component';
// import { CaAgentsTableComponent} from './../shared/ca-agents-table/ca-agents-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';

//import { FormControllService } from './../../services/FormControllService';
// import { FirstTableComponent } from './first-table/first-table.component';
// import { TaAgentsTableComponent } from './second-table/second-table.component';


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
    path: 'admin-user-management',
    component: AdminUserManagementComponent,
  
    // children: [
      
    //   {
    //     path: 'admin-user-management/ta-agents',
    //     component: TaAgentsTableComponent
    //   },
    
    //   {
    //     path: 'admin-user-management/ca-agents',
    //     component: CaAgentsTableComponent
    //   },

    // ],

  },

];


@NgModule({
  declarations: [ TAItineraryMapComponent, AdminUserManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FlexLayoutModule
  ]
})
export class BoardsModule { }


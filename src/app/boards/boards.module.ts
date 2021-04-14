import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TaOnlyDetailFormComponent } from './../shared/ta-only-detail-form/ta-only-detail-form.component';
import { CustomerDetailFormComponent } from './../shared/customer-detail-form/customer-detail-form.component';
import { CustomerTableComponent } from './../shared/customer-table/customer-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { LeaveComponent } from './leave/leave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';

import { TaTaskComponent } from './ta-task/ta-task.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';
import { CustomerAvailabiltyComponent } from './customer-availabilty/customer-availabilty.component';
import { CaAgentsTableComponent } from '../shared/ca-agents-table/ca-agents-table.component';
import { TaAgentsTableComponent } from '../shared/ta-agents-table/ta-agents-table.component';
import { AssignComponent } from './assign/assign.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { CaUserManagementComponent } from './ca-user-management/ca-user-management.component';
import { MatIconModule } from '@angular/material/icon';

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
    path: 'itinerary-details',
    component: ItineraryDetailsComponent
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
  },

  {
    path: 'assign',
    component: AssignComponent
  },

  {
    path: 'admin-user-management',
    component: AdminUserManagementComponent,
    children: [
      { path: 'ca-agents' , component: CaAgentsTableComponent},
      { path: 'ta-agents' , component: TaAgentsTableComponent}
    
    ]
  },
  {
    path: 'ca-user-management',
    component: CaUserManagementComponent,
    children: [
      { path: 'ta-agents' , component: TaAgentsTableComponent},
      { path: 'customers' , component: CustomerTableComponent},
      { path: 'customers-registration' , component: CustomerDetailFormComponent},
      { path: 'ta-agents-registration' , component: TaOnlyDetailFormComponent},
    ]
  },
]


@NgModule({

  declarations: [
    TAItineraryMapComponent, 
    TaTaskComponent,
    LeaveComponent,
    AdminUserManagementComponent,
    CustomerAvailabiltyComponent,
    ItineraryDetailsComponent,
    AssignComponent,
    CaUserManagementComponent
    ],
  
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
    OverlayModule,
    MatDialogModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    Ng2SearchPipeModule,
    MatIconModule
  ],
  providers: [MatDatepickerModule]
})

export class BoardsModule { }


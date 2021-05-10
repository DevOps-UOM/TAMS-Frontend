import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { Role } from '../models/role.model';
import { AuthGuard } from '../shared/auth/auth.guard';
import { CaAgentsTableComponent } from '../shared/ca-agents-table/ca-agents-table.component';
import { CustomerDetailFormComponent } from '../shared/customer-detail-form/customer-detail-form.component';
import { CustomerTableComponent } from '../shared/customer-table/customer-table.component';
import { TaAgentsTableComponent } from '../shared/ta-agents-table/ta-agents-table.component';
import { TaOnlyDetailFormComponent } from '../shared/ta-only-detail-form/ta-only-detail-form.component';
import { AdminUserManagementComponent } from './admin-user-management/admin-user-management.component';
import { AssignComponent } from './assign/assign.component';
import { CaUserManagementComponent } from './ca-user-management/ca-user-management.component';
import { CustomerAvailabiltyComponent } from './customer-availabilty/customer-availabilty.component';
import { ItineraryDetailsComponent } from './itinerary-details/itinerary-details.component';
import { LeaveComponent } from './leave/leave.component';
import { StatDashboardComponent } from './stat-dashboard/stat-dashboard.component';
import { TAItineraryMapComponent } from './ta-itinerary-map/ta-itinerary-map.component';
import { TaTaskComponent } from './ta-task/ta-task.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import {PrintItiDetailsComponent} from "./print-iti-details/print-iti-details.component";
import {TaMapComponent} from './ta-map/ta-map.component'

const routes: Routes = [
    {
      path: '',
      redirectTo: '/boards/itinerary-map',
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
    path: 'itinerary-details/print-iti-details',
    component: PrintItiDetailsComponent
  },
    {
      path: 'ta-map',
      component: TaMapComponent
    },
    {
      path: 'leave',
      component: LeaveComponent
    },
    {
      path: 'itinerary-task',
      component: TaTaskComponent,

    },
    {
      path: 'customer-availability',
      component: CustomerAvailabiltyComponent,
      canActivate: [AuthGuard],
    },

    {
      path: 'assign',
      component: AssignComponent,
      canActivate: [AuthGuard],
    },

    {
      path: 'admin-user-management',
      component: AdminUserManagementComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'ca-agents' , component: CaAgentsTableComponent},
        { path: 'ta-agents' , component: TaAgentsTableComponent}

      ]
    },
    {
      path: 'ca-user-management',
      component: CaUserManagementComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'ta-agents' , component: TaAgentsTableComponent},
        { path: 'customers' , component: CustomerTableComponent},
        { path: 'customers-registration' , component: CustomerDetailFormComponent},
        { path: 'ta-agents-registration' , component: TaOnlyDetailFormComponent},
      ]
    },
    {
      path: 'stat-dashboard',
      component: StatDashboardComponent,
      canActivate: [AuthGuard],
      data: { roles: [Role.Admin] }
    }
  ];

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })

  export class BoardsRoutingModule { }

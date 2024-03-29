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
import { PrintItiDetailsComponent } from "./print-iti-details/print-iti-details.component";
import { TaMapComponent } from './ta-map/ta-map.component';

import { RequestResetComponent } from './user/request-reset/request-reset.component';
import { ResponseResetComponent } from './user/response-reset/response-reset.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full'
  },

  {
    path: 'itinerary-map',
    component: TAItineraryMapComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ta] },
  },
  {
    path: 'itinerary-details',
    component: ItineraryDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },
  {
    path: 'itinerary-details/print-iti-details',
    component: PrintItiDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },
  {
    path: 'ta-map',
    component: TaMapComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },
  {
    path: 'leave',
    component: LeaveComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },
  {
    path: 'itinerary-task',
    component: TaTaskComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ta] },

  },
  {
    path: 'customer-availability',
    component: CustomerAvailabiltyComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },

  {
    path: 'assign',
    component: AssignComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
  },

  {
    path: 'admin-user-management',
    component: AdminUserManagementComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] },
    children: [
      { path: 'ca-agents', component: CaAgentsTableComponent },
      { path: 'ta-agents', component: TaAgentsTableComponent }

    ]
  },
  {
    path: 'ca-user-management',
    component: CaUserManagementComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ca, Role.Admin] },
    children: [
      { path: 'ta-agents', component: TaAgentsTableComponent },
      { path: 'customers', component: CustomerTableComponent },
      { path: 'customers-registration', component: CustomerDetailFormComponent },
      { path: 'ta-agents-registration', component: TaOnlyDetailFormComponent },
    ]
  },
  {
    path: 'stat-dashboard',
    component: StatDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'request-reset-password',
    component: RequestResetComponent,
  },
  {
    path: 'response-reset-password/:token',
    component: ResponseResetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BoardsRoutingModule { }

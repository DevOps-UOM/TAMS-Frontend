import { DetailFormComponent } from './detail-form/detail-form.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { AuthGuard } from './auth/auth.guard';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const admin_routes: Routes = [
    // { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
    // { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
      { path: 'boards/admin-user-management/ta-agents/:userid' , component: ProfileComponent },
      { path: 'boards/admin-user-management/ca-agents/:userid' , component: ProfileComponent },
      { path: 'boards/ca-user-management/ta-agents/:userid' , component: ProfileComponent },
      { path: 'boards/ca-user-management/customers-registration/:cust_id' , component: CustomerProfileComponent},
      { path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]},
      { path: 'boards/admin-user-management/ta-agents/detail-form' , component: DetailFormComponent },

  ];

  @NgModule({
      imports: [RouterModule.forChild(admin_routes)],
      exports: [RouterModule]
  })

  export class SharedRoutingModule { }
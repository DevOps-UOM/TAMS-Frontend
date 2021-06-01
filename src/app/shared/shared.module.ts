import { SharedRoutingModule } from './shared-routing.module';
import { LayoutsModule } from './../layouts/layouts.module';
import { from } from 'rxjs';
import {environment} from '../../environments/environment'
//import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MapComponent } from './map/map.component';
import { TaTaskCardComponent } from './ta-task-card/ta-task-card.component';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ContainerComponent } from './container/container.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CaAgentsTableComponent } from './ca-agents-table/ca-agents-table.component';
import { TaAgentsTableComponent } from './ta-agents-table/ta-agents-table.component';
import { NavTablesComponent } from './nav-tables/nav-tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { AddTaskComponent } from './add-task/add-task.component';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import {AngularFireModule} from '@angular/fire'
export const firebaseConfig = environment.firebaseConfig;

import { TaOnlyDetailFormComponent } from './ta-only-detail-form/ta-only-detail-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CustomerDetailFormComponent } from './customer-detail-form/customer-detail-form.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';

import { UserSharedComponent } from './user-shared/user-shared.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from '../services/user/user.service';
import { PinCustomerComponent } from './pin-customer/pin-customer.component';
import { ProfileComponent } from './profile/profile.component';
import { EditTasksComponent } from './edit-tasks/edit-tasks.component';

// const admin_routes: Routes = [
//   // { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
//   // { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
//     { path: 'boards/admin-user-management/ta-agents/:userid' , component: UserProfileComponent },
//     { path: 'boards/admin-user-management/ca-agents/:userid' , component: UserProfileComponent },
//     { path: 'boards/ca-user-management/ta-agents/:userid' , component: UserProfileComponent },
//     { path: 'boards/ca-user-management/customers-registration/:cust_id' , component: CustomerProfileComponent},
//     { path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]}
// ];

@NgModule({
  declarations: [NavBarComponent,AddTaskComponent, MapComponent, TaTaskCardComponent, SideBarComponent, ContainerComponent, DetailFormComponent, CaAgentsTableComponent, TaAgentsTableComponent, NavTablesComponent, TaOnlyDetailFormComponent, UserProfileComponent, CustomerTableComponent, CustomerDetailFormComponent, CustomerProfileComponent,UserSharedComponent, PinCustomerComponent,ProfileComponent, EditTasksComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKeys,
      libraries:['places']
    }),
    AgmDirectionModule,
    AgmSnazzyInfoWindowModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    SharedRoutingModule
  ],

  exports: [
    CaAgentsTableComponent, TaAgentsTableComponent, TaOnlyDetailFormComponent, CustomerTableComponent, CustomerDetailFormComponent,
    NavBarComponent, MapComponent,SideBarComponent,TaTaskCardComponent,FormsModule, ReactiveFormsModule, ContainerComponent, DetailFormComponent, NavTablesComponent,AddTaskComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService]
})

export class SharedModule { }


//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout'
import {AgmCoreModule}from '@agm/core';
import { ItineraryMapComponent } from './itinerary-map/itinerary-map.component';
import { ContainerComponent } from './container/container.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { CaAgentsTableComponent } from './ca-agents-table/ca-agents-table.component';
import { TaAgentsTableComponent } from './ta-agents-table/ta-agents-table.component';
import { NavTablesComponent } from './nav-tables/nav-tables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';

const admin_routes: Routes = [
  { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
  { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
];

@NgModule({
  declarations: [ NavBarComponent, ItineraryMapComponent, ContainerComponent, DetailFormComponent, CaAgentsTableComponent, TaAgentsTableComponent, NavTablesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAnQIrbexL15BeN97xOY7nOjcQkJZfJsig'
    }),
    RouterModule.forChild(admin_routes)
  ],
  exports:[
    NavBarComponent,ItineraryMapComponent, FormsModule, ReactiveFormsModule, ContainerComponent, DetailFormComponent, NavTablesComponent, TaAgentsTableComponent, CaAgentsTableComponent
  ]
})
export class SharedModule { }


//AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0
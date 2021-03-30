import { LayoutsModule } from './../layouts/layouts.module';
import { from } from 'rxjs';
//import { BrowserModule } from '@angular/platform-browser';
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

const admin_routes: Routes = [
  // { path: 'admin-user-management/ca-agents' , component: CaAgentsTableComponent},
  // { path: 'admin-user-management/ta-agents' , component: TaAgentsTableComponent}
];

@NgModule({

  declarations: [
    NavBarComponent, 
    MapComponent, 
    TaTaskCardComponent, 
    SideBarComponent, 
    ContainerComponent, 
    DetailFormComponent, 
    CaAgentsTableComponent, 
    TaAgentsTableComponent, 
    NavTablesComponent, 
    AddTaskComponent
  ],

  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9rPesD1LpqsLTVFeHEpxvjnl5FNLDbS0',
      libraries:['places']
    }),
    RouterModule.forChild(admin_routes),
    AgmDirectionModule,
    AgmSnazzyInfoWindowModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule
  ],

  exports: [
    CaAgentsTableComponent, TaAgentsTableComponent, 
    NavBarComponent, 
    MapComponent,
    SideBarComponent,
    TaTaskCardComponent,
    FormsModule, 
    ReactiveFormsModule, 
    ContainerComponent, 
    DetailFormComponent, 
    NavTablesComponent, 
    TaAgentsTableComponent, 
    CaAgentsTableComponent,
    AddTaskComponent
  ]
})

export class SharedModule { }


import { BoardsRoutingModule } from './boards/boards-routing.module';
import { BrowserModule,HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import * as Hammer from 'hammerjs';

import {AngularFireModule} from '@angular/fire';
import { ServiceWorkerModule } from '@angular/service-worker'
import { RatingComponent } from './util/rating/rating.component';
import {SharedModule} from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InterceptorService } from './services/interceptor/interceptor.service';

export const firebaseConfig = environment.firebaseConfig;

export class MyHammerConfig extends HammerGestureConfig{
  overrides = <any>{
    'swipe': {direction:Hammer.DIRECTION_ALL}
  }
}

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    AlertsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ToastrModule.forRoot(),
    NgbModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig
  },{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule,HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import {HttpClientModule} from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import * as Hammer from 'hammerjs';

import {AngularFireModule} from '@angular/fire';
import { ServiceWorkerModule } from '@angular/service-worker'
export const firebaseConfig = environment.firebaseConfig;

export class MyHammerConfig extends HammerGestureConfig{
  overrides = <any>{
    'swipe': {direction:Hammer.DIRECTION_ALL}
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    AlertsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

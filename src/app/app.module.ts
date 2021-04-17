import { BrowserModule,HammerGestureConfig,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import {HttpClientModule} from '@angular/common/http';
import { AlertsModule } from 'angular-alert-module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'

import * as Hammer from 'hammerjs';

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
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HAMMER_GESTURE_CONFIG,
    useClass:MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Constants} from "./config/constants";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import { entityConfig } from './ngrx-store-data/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TestDataService} from "./services/ngrx-override.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://fakestoreapi.com/products',
  timeout: 3000, // request timeout
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EntityDataModule.forRoot(entityConfig),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    })
  ],
  providers: [
    Constants,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    TestDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

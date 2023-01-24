import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Constants} from "./config/constants";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {DefaultDataServiceConfig, EntityDataModule, EntityDataService, EntityMetadataMap} from '@ngrx/data';
import { entityConfig } from './ngrx-store-data/entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {TestDataService} from "./services/ngrx-override.service";
import {StoreProductsModule} from "./store-products/store-products.module";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://fakestoreapi.com/',
  timeout: 3000, // request timeout
}

export const entityMetadata: EntityMetadataMap = {
  Product: {
    entityName: 'Product'
  }
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreProductsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ entityMetadata }),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [
    Constants,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
//  constructor(private entityDataService: EntityDataService, private productDataService: TestDataService) {
//    this.entityDataService.registerService("Product", this.productDataService); }
}

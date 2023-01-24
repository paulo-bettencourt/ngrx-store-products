import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  EntityMetadataMap,
  HttpUrlGenerator
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreProductsModule} from "./store-products/store-products.module";
import {PluralHttpUrlGenerator} from "./services/plural-ngrx.component";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'https://fakestoreapi.com/',
  timeout: 6000, // request timeout
}

export const entityMetadata: EntityMetadataMap = {
  Product: {}
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
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

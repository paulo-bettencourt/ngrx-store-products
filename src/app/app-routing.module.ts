import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./store-products/products/products.component";
import {StoreProductsModule} from "./store-products/store-products.module";

const routes: Routes = [{
  path: '',
  component: ProductsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

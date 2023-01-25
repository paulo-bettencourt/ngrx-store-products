import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./store-products/products/products.component";
import {StoreProductsModule} from "./store-products/store-products.module";
import {UpdateComponent} from "./store-products/update-products/update/update.component";

const routes: Routes = [
  {
  path: '',
  component: ProductsComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), StoreProductsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

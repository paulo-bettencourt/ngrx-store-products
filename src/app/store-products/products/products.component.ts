import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {ProductReduxService} from "../../services/redux.service";
import {TestDataService} from "../../services/ngrx-override.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;
  heroes$!: Observable<Product[]>;

  constructor(private _service: ApiService, private productsService: ProductReduxService ) {
    this.heroes$ = productsService.entities$;
    this.loading$ = productsService.loading$;
  }

  ngOnInit() {
    this.products$ = this.productsService.getAll();
  }

  add(product: Product) {
    this.productsService.add(product);
  }

  delete(product: Product) {
    this.productsService.delete(product.id);
  }

  getProducts() {
    return this.productsService.getAll();
  }

  update(hero: Product) {
    this.productsService.update(hero);
  }


}

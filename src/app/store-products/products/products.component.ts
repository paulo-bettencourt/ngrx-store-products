import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {HeroService} from "../../services/redux.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$!: Observable<Product[]>;
  loading$!: Observable<boolean>;
  heroes$!: Observable<Product[]>;

  constructor(private _service: ApiService, private productsService: HeroService) {
    this.products$ = this._service.getProducts();
    this.heroes$ = productsService.entities$;
    this.loading$ = productsService.loading$;
  }


  ngOnInit() {
    console.log("products: ", this.getProducts())
    this.getProducts();
  }

  add(product: Product) {
    this.productsService.add(product);
  }

  delete(product: Product) {
    this.productsService.delete(product.id);
  }

  getProducts() {
    this.productsService.getAll();
  }

  update(hero: Product) {
    this.productsService.update(hero);
  }


}

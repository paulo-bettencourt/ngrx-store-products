import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";
import {ProductReduxService} from "../../services/redux.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  loading$!: Observable<boolean>;
  productEntities$!: Observable<Product[]>;

  constructor(private productsService: ProductReduxService ) {
    this.productEntities$ = productsService.entities$;
    this.loading$ = productsService.loading$;
  }

  ngOnInit() {
    this.productsService.getAll();
  }

  add(product: Product) {
    this.productsService.add(product);
  }

  delete(id: number) {
    this.productsService.delete(id);
  }

  getProducts() {
    return this.productsService.getAll();
  }

  update(product: Product) {
    this.productsService.update(product);
  }

}

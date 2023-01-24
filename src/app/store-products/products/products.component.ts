import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Product} from "../../interfaces/product.interface";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products$!: Observable<any>;

  constructor(private _service: ApiService) {
    this.products$ = this._service.getProducts();
  }

}

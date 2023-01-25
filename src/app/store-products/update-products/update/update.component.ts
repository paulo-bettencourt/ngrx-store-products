import { Component } from '@angular/core';
import {Form, FormBuilder, Validator, Validators} from "@angular/forms";
import {Product, Rating} from "../../../interfaces/product.interface";
import {ProductReduxService} from "../../../services/redux.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  form = this._fb.group({
    id: [0, Validators.required],
    title: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
    rating: ['', Validators.required],
  })
  loading$!: Observable<boolean>;
  productEntities$!: Observable<Product[]>;
  id!: number;
  updatedProduct!: Product;

  constructor(private _fb: FormBuilder, private productsService: ProductReduxService, private _route: ActivatedRoute
  ) {
    this.productEntities$ = productsService.entities$;
    this.id = Number(this._route.snapshot.paramMap.get('id'));
    this.getByKey(this.id);
  }

  getByKey(id: number) {
    this.productsService.getByKey(id).subscribe((data: Product) => {
        this.updatedProduct = data;
      console.log('produto final ', this.updatedProduct)
      this.updateProductOnForm();
    })
  }

  updateProductOnForm() {
    this.form.controls['id'].setValue(this.updatedProduct.id);
    this.form.controls['title'].setValue(this.updatedProduct.title);
    this.form.controls['description'].setValue(this.updatedProduct.description);
  }

  updateApiRequest() {
    this.productsService.update(this.updatedProduct);
  }

}

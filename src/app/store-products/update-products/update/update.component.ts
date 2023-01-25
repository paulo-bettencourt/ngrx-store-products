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
    title: ['a', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    category: ['', Validators.required],
    image: ['', Validators.required],
    rating: ['', Validators.required],
  })
  loading$!: Observable<boolean>;
  productEntities$!: Observable<Product[]>;
  id!: number;
  updatedProduct!: Product;
  newProduct!: Product;

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
    this.form.controls['price'].setValue(this.updatedProduct.price);
    this.form.controls['description'].setValue(this.updatedProduct.description);
    this.form.controls['category'].setValue(this.updatedProduct.category);
    this.form.controls['image'].setValue(this.updatedProduct.image);
  }

  updateApiRequest() {
    console.log("updateApiRequest, obj is true")
    const id = this.updatedProduct.id;
    const title = this.form.controls['title'].value;
    const category = this.form.controls['category'].value;
    const description = this.form.controls['description'].value;
    const image = this.form.controls['image'].value;
    const price = this.form.controls['price'].value;

    if(id && title && category && description && image && price) {
      console.log("obj is true")
      this.newProduct = {
        category: category,
        description: description,
        id: id,
        image: image,
        price: 0,
        title: 'LOREM PISPUM'
      }
    }
    this.productsService.update(this.newProduct);
  }
}

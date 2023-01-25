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
    const idValue = this.updatedProduct.id;
    const titleFormValue = this.form.controls['title'].value;
    const categoryFormValue = this.form.controls['category'].value;
    const descriptionFormValue = this.form.controls['description'].value;
    const imageFormValue = this.form.controls['image'].value;
    const priceFormValue = this.form.controls['price'].value;

    if(idValue && titleFormValue && categoryFormValue && descriptionFormValue && imageFormValue && priceFormValue) {
      this.newProduct = {
        id: idValue,
        title: titleFormValue,
        category: categoryFormValue,
        description: descriptionFormValue,
        image: imageFormValue,
        price: 0
      }
    }
    this.productsService.update(this.newProduct);
  }
}

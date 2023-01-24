import {Injectable, NgModule} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory, EntityDataService
} from '@ngrx/data';
import {Product} from "../interfaces/product.interface";

@Injectable({ providedIn: 'root' })
export class ProductReduxService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory
  ) {
    super('Product', serviceElementsFactory);
  }
}

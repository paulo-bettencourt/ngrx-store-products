import {Injectable, NgModule} from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory, EntityDataService
} from '@ngrx/data';
import {Product} from "../interfaces/product.interface";
import {TestDataService} from "./ngrx-override.service";


@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Product> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory,
              private entityDataService: EntityDataService,
              private newService: TestDataService
  ) {
    super('Product', serviceElementsFactory);
    this.entityDataService.registerService("DidDocument", this.newService);
  }
}

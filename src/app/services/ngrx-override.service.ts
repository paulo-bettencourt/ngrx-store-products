import {Injectable} from "@angular/core";
import {
  DefaultDataService,
  DefaultHttpUrlGenerator,
  DefaultPluralizer,
  HttpMethods,
  HttpUrlGenerator, Logger
} from "@ngrx/data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";
import {Constants} from "../config/constants";

@Injectable()
export class TestDataService extends DefaultDataService<Product> {

  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator, logger: Logger, private constants: Constants) {
    super('Product', http, httpUrlGenerator);
    logger.log('Created custom Product EntityDataService');
  }

//  override getAll(): Observable<Product[]> {
//    return this.http.get<Product[]>('this.constants.API_ENDPOINT');
//  }

}

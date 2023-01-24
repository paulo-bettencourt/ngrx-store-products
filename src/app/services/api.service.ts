import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";
import {Constants} from "../config/constants";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient, private _constants: Constants) {}

//  getProducts(): Observable<Product[]> {
//    return this._http.get<Product[]>(this._constants.API_ENDPOINT);
//  }
}

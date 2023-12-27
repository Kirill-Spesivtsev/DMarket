import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/products';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
 

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Pagination<Product[]>>(environment.apiBaseUrl + "products?pageNumber=1&pageSize=12");
  }
}

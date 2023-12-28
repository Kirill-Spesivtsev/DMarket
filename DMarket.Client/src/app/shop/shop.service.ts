import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { environment } from '../../environments/environment';
import { ProductBrand } from '../shared/models/product-brand';
import { ProductType } from '../shared/models/product-type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
 
  constructor(private http: HttpClient) {}

  getProducts(brandId: string, typeId: string) {
    let params = new HttpParams()
      .set('pageNumber', 1)
      .set('pageSize', 12);
    if (brandId && brandId != "All") params = params.set('brandId', brandId);
    if (typeId && typeId != "All") params = params.set('typeId', typeId);
    
    return this.http.get<Pagination<Product[]>>(environment.apiBaseUrl + "products", {params: params});
  }

  getBrands() {
    return this.http.get<ProductBrand[]>(environment.apiBaseUrl + "products/brands");
  }

  getTypes() {
    return this.http.get<ProductType[]>(environment.apiBaseUrl + "products/types");
  }
}

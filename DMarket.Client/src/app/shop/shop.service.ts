import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from '../shared/models/pagination';
import { Product } from '../shared/models/product';
import { environment } from '../../environments/environment';
import { ProductBrand } from '../shared/models/productBrand';
import { ProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
 
  constructor(private http: HttpClient) {}

  getProducts(p: ShopParams) {
    let params = new HttpParams()
      .set('pageNumber', p.pageNumber)
      .set('pageSize', p.pageSize);
    if (p.brandId && p.brandId != "All") params = params.set('brandIdFilter', p.brandId);
    if (p.typeId && p.typeId != "All") params = params.set('typeIdFilter', p.typeId);
    if (p.sortOrder) params = params.set('sortOrder', p.sortOrder);
    if (p.sortKey) params = params.set('sortKey', p.sortKey);
    if (p.searchQuery) params = params.set('searchString', p.searchQuery);
    console.log(p.sortOrder);

    return this.http.get<Pagination<Product[]>>(environment.apiBaseUrl + "products", {params: params});
  }

  getBrands() {
    return this.http.get<ProductBrand[]>(environment.apiBaseUrl + "products/brands");
  }

  getTypes() {
    return this.http.get<ProductType[]>(environment.apiBaseUrl + "products/types");
  }
}

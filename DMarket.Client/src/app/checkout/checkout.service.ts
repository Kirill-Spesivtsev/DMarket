import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderToCreate } from '../shared/models/order';
import { DeliveryMethod } from '../shared/models/deliveryMethod';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createOrder(order: OrderToCreate) {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get<DeliveryMethod[]>(this.baseUrl + 'orders/delivery-methods').pipe(
      map( dm => {
        return dm.sort((a, b) => b.price - a.price)
      })
    )
  }
}
import { Injectable } from '@angular/core';
import { BehaviorSubject, isEmpty } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, BasketItem } from '../shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiBaseUrl;
  private basketSource =  new BehaviorSubject<Basket | null>(null);
  basketSource$ = this.basketSource.asObservable();

  constructor(private http: HttpClient) { }

  getBasket(id: string){
    return this.http.get<Basket>(this.baseUrl + "basket" + "?id=" + id).subscribe({
      next: basket => this.basketSource.next(basket)
    })
  }

  setBasket(basket: Basket){
    return this.http.post<Basket>(this.baseUrl + "basket", basket).subscribe({
      next: basket => this.basketSource.next(basket)
    })
  }

  getCurrentBasket(){
    return this.basketSource.value;
  }

  addItemToBasket(item: Product, quantity = 1) {
    const basketItem = this.mapProductToBasketItem(item);
    const basket = this.getCurrentBasket() ?? this.createBasket();
    if (basket) basket.items = this.addOrUpdateBasketItem(basket.items, basketItem, quantity);
    this.setBasket(basket!);
  }

  private addOrUpdateBasketItem(items: BasketItem[], newItem: BasketItem, quantity: number): BasketItem[] {
    const item = items.find(x => x.id === newItem.id);
    if (item) item.quantity += quantity
    else {
      newItem.quantity = quantity;
      items.push(newItem);
    }
    return items;
  }

  createBasket(): Basket | null {
    const basket = new Basket();
    localStorage.setItem("basket_id", basket.id);
    return basket;
  }

  private mapProductToBasketItem(item: Product): BasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      quantity: 0,
      pictureUrl: item.imageUrl,
      productBrand: item.productBrand,
      productType: item.productType
    }
  }

}

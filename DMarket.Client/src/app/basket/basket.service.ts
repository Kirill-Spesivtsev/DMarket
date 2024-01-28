import { Injectable } from '@angular/core';
import { BehaviorSubject, isEmpty } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Basket, BasketItem, BasketTotal } from '../shared/models/basket';
import { HttpClient } from '@angular/common/http';
import { Product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = environment.apiBaseUrl;
  private basketSource =  new BehaviorSubject<Basket | null>(null);
  private basketTotalSource =  new BehaviorSubject<BasketTotal | null>(null);
  basketSource$ = this.basketSource.asObservable();
  basketTotalSource$ = this.basketTotalSource.asObservable();

  constructor(private http: HttpClient) { }

  getBasket(id: string){
    return this.http.get<Basket>(this.baseUrl + "basket" + "?id=" + id).subscribe({
      next: basket => {
        this.basketSource.next(basket);
        this.calculateBasketTotal();
      }
    })
  }

  setBasket(basket: Basket){
    return this.http.post<Basket>(this.baseUrl + "basket", basket).subscribe({
      next: basket => {
        this.basketSource.next(basket);
        this.calculateBasketTotal();
      }
    })
  }

  getCurrentBasket(){
    return this.basketSource.value;
  }

  addItemToBasket(item: Product | BasketItem, quantity = 1) {
    if (!this.isBasketItem(item)) item = this.mapProductToBasketItem(item);
    const basket = this.getCurrentBasket() ?? this.createBasket();
    if (basket) basket.items = this.addOrUpdateBasketItem(basket.items, item, quantity);
    this.setBasket(basket!);
  }

  removeItemFromBasket(id: string, quantity = 1) {
    const basket = this.getCurrentBasket();
    if (!basket) return;
    
    const item = basket.items.find(x => x.id === id);
    if (item) {
      item.quantity -= quantity;
      if (item.quantity === 0) {
        basket.items = basket.items.filter(x => x.id !== id);
      }
      if (basket.items.length > 0) this.setBasket(basket);
      else this.deleteBasket(basket);
    }
  }

  deleteBasket(basket: Basket) {
    return this.http.delete(this.baseUrl + "basket" + "?id=" + basket.id).subscribe({
      next: () => {
        this.basketSource.next(null);
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
      }
    })
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
      imageUrl: item.imageUrl,
      productBrand: item.productBrand,
      productType: item.productType
    }
  }

  private calculateBasketTotal(){
    const basket = this.getCurrentBasket();
    if (!basket) return;
    const shippingCost = 0;
    const basketPrice = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    const total = shippingCost + basketPrice;
    this.basketTotalSource.next({shippingCost, basketPrice, total});
  }

  private isBasketItem(item: Product | BasketItem): item is BasketItem {
    return (item as BasketItem).quantity !== undefined;
  }

}

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

  getBasket(id: number){
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
    if (basket?.Items) basket.items = this.addOrUpdateBasketItem(basket?.Items!, basketItem, quantity);
    this.setBasket(basket!);
  }

  private addOrUpdateBasketItem(items: BasketItem[], newItem: BasketItem, quantity: number): BasketItem[] {
    const item = items.find(x => x.Id === newItem.Id);
    if (item) item.Quantity = quantity
    else {
      newItem.Quantity = quantity;
      items.push(newItem);
    }
    return items;
  }

  createBasket(): Basket | null {
    const basket = new Basket();
    localStorage.setItem("basket_id", basket.Id);
    return basket;
  }

  private mapProductToBasketItem(item: Product): BasketItem {
    return {
      Id: item.id,
      ProductName: item.name,
      Price: item.price,
      Quantity: 0,
      PictureUrl: item.imageUrl,
      ProductBrand: item.productBrand,
      ProductType: item.productType
    }
  }

}

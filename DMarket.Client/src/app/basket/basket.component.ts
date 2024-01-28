import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { BasketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(protected basketService: BasketService){}

  incrementQuantity(item: BasketItem) {
    this.basketService.addItemToBasket(item);
  }

  removeItem(id: string, quantity: number) {
    this.basketService.removeItemFromBasket(id, quantity);
  }

}

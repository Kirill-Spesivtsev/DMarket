import { Component, Input } from '@angular/core';
import { Product } from '../shared/models/product';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(protected basketService: BasketService){}


}

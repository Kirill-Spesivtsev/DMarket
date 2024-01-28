import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';
import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private accoutService: AccountService, private basketService: BasketService){}

  ngOnInit(): void {
    this.fetchCurrentUser();
    const basketId = localStorage.getItem("basket_id");
    if (basketId) this.basketService.getBasket(basketId);
  }

  fetchCurrentUser(){
    const jwtToken = localStorage.getItem('jwtToken');
    this.accoutService.fetchCurrentUser(jwtToken).subscribe();
  }

}
 
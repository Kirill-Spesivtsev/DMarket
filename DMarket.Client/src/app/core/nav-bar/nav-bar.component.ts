import { Component } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { BasketItem } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(protected accountService: AccountService, protected basketService: BasketService){}

  logout(): void {
    this.accountService.logout();
  }

  calculateBasketItems(items : BasketItem[]){
    return items.reduce((sum, element) => sum + element.quantity, 0)
  }
}

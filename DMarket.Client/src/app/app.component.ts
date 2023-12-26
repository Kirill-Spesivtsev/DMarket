import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from './shared/models/products';
import { Pagination } from './shared/models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DMarket';
  products: Product[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:7113/api/v1/products")
      .subscribe({
        next: response => this.products = response.data, //
        error: error => console.log(error),
        complete: () => {
          console.log('request completed');
        },
      })
  }
}

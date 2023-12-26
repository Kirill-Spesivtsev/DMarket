import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DMarket';
  products: any[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get("https://localhost:7113/api/v1/products")
      .subscribe({
        next: (response: any) => this.products = response, //
        error: error => console.log(error),
        complete: () => {
          console.log('request completed');
        },
      })
  }
}

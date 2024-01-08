import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  baseUrl = environment.apiBaseUrl;

  validationErrors: any;

  constructor(private http: HttpClient){}

  get400ValidationError(){
    this.http.get(this.baseUrl + "products/fwewf").subscribe({
      next: response => console.log(response),
      error: error => {
        this.validationErrors = Object.keys(error.errors).map(function(key){
          return error.errors[key];
        });
      }
    })
  }

  get404NotFound(){
    this.http.get(this.baseUrl + "products/df4408e0-ba44-41cc-a6bc-75684b9d8a20").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
}

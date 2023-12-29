import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { ProductBrand } from '../shared/models/productBrand';
import { ProductType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products: Product[] = [];
  brands: ProductBrand[] = [];
  types: ProductType[] = [];

  shopParams = new ShopParams();

  minPrice: number | null = null;
  maxPrice: number | null = null;

  sortOptions = [
    {name: "Title", value: "title"},
    {name: "Id", value: "id"},
    {name: "Price", value: "price"},
    {name: "Created", value: "created_time"}
  ]

  ordAsc: boolean = true;
  

  constructor(private shopService: ShopService){}
  
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    this.shopParams.sortOrder = this.ordAsc ? "asc" : "desc";
    this.shopService.getProducts(this.shopParams)
        .subscribe({
          next: response => this.products = response.data,
          error: error => console.log(error)
        })
  }

  getBrands(): void {
    this.shopService.getBrands().subscribe({
      next: response => this.brands = [{id: "", name: "All"}, ...response],
      error: error => console.log(error)
    })
  }

  getTypes(): void {
    this.shopService.getTypes().subscribe({
      next: response => this.types = [{id: "", name: "All"}, ...response],
      error: error => console.log(error)
    })
  }

  onBrandSelected(brandId: string){
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: string){
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onMinPriceSet(price: string){
    this.minPrice = parseInt(price, 10);
    //this.getProducts();
    alert(this.minPrice);
  }

  onMaxPriceSet(price: string){
    this.maxPrice = parseInt(price, 10);
    //this.getProducts();
  }

  onSortSelected(event: any){
    this.shopParams.sortOrder = event.target.value;
    this.getProducts();
  }

}

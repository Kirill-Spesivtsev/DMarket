import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from './shop.service';
import { ProductBrand } from '../shared/models/product-brand';
import { ProductType } from '../shared/models/product-type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  products: Product[] = [];
  brands: ProductBrand[] = [];
  types: ProductType[] = [];

  brandIdSecected: string = "";
  typeIdSelected: string = "";

  minPrice: number | null = null;
  maxPrice: number | null = null;
  
  sortOptions = [
    "Alphabetical"
  ]
  ordAsc: boolean = true;
  


  constructor(private shopService: ShopService){}
  
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    this.shopService.getProducts(this.brandIdSecected, this.typeIdSelected).subscribe({
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
    this.brandIdSecected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: string){
    this.typeIdSelected = typeId;
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

}

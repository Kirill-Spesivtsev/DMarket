import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("search") searchQuery?: ElementRef;

  products: Product[] = [];
  brands: ProductBrand[] = [];
  types: ProductType[] = [];

  shopParams: ShopParams = new ShopParams();

  minPrice?: number = undefined;
  maxPrice?: number = undefined;

  sortOptions = [
    {name: "Name", value: "name"},
    {name: "Id", value: "id"},
    {name: "Price", value: "price"},
    {name: "Created", value: "created_time"}
  ]

  IsOrderAsc: boolean = true;

  totalCount = 0;

  pageItemNumberFirst = 0;
  pageitemnumberLast = 0;


  constructor(private shopService: ShopService){}
  
  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    this.shopParams.sortOrder = this?.IsOrderAsc ? "asc" : "desc";
    if (!this.shopParams.sortKey) this.shopParams.sortKey = "name";
    this.shopService.getProducts(this.shopParams).subscribe({
      next: response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageNumber;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.totalElements;
        this.fillPageListingHeader();
        //window.scrollTo(0, 0);
      },
      error: error => console.log(error)
    })
  }

  fillPageListingHeader(): void {
    this.pageItemNumberFirst = (this.shopParams.pageNumber - 1) * this.shopParams.pageSize + 1;
    this.pageitemnumberLast = this.shopParams.pageNumber * this.shopParams.pageSize > this.totalCount ?
      this.totalCount :
      this.shopParams.pageNumber * this.shopParams.pageSize;
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
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onTypeSelected(typeId: string){
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onMinPriceSet(price: string){
    this.minPrice = parseInt(price, 10);
    //this.getProducts();
  }

  onMaxPriceSet(price: string){
    this.maxPrice = parseInt(price, 10);
    //this.getProducts();
  }

  onSortKeySelected(event: any){
    this.shopParams.sortKey = event.target.value;
    this.getProducts();
  }

  onSortOrderSelected(){
    this.IsOrderAsc = !this.IsOrderAsc;
    this.getProducts();
  }

  onPageChanged(event: any){
    if (this.shopParams.pageNumber != event.page){
      this.shopParams.pageNumber = event.page;
      this.getProducts();
    }
  }

  onSearch(){
    this.shopParams.searchQuery = this.searchQuery?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }

  onClear(){
    if (this.searchQuery) this.searchQuery.nativeElement.value = "";
    this.shopParams = new ShopParams;
    this.getProducts();
  }

}

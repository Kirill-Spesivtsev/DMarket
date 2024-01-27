import { v4 as uuid } from "uuid";

export interface Basket{
    Id: string
    Items: BasketItem[]
}
  
export interface BasketItem {
    Id: string
    ProductName: string
    Price: number
    Quantity: number
    PictureUrl: string
    ProductBrand: string
    ProductType: string
}
  
export class Basket implements Basket {
    Id = uuid();
    items: BasketItem[] = [];
}
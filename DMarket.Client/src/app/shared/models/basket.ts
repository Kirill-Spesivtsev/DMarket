import { v4 as uuid } from "uuid";

export interface Basket{
    id: string
    items: BasketItem[]
}
  
export interface BasketItem {
    id: string
    productName: string
    price: number
    quantity: number
    imageUrl: string
    productBrand: string
    productType: string
}
  
export class Basket implements Basket {
    id = uuid();
    items: BasketItem[] = [];
}

export interface BasketTotal{
    shippingCost: number;
    basketPrice: number;
    total: number;
}
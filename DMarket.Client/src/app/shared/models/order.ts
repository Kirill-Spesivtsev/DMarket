import { Address } from "./applicationUser";

export interface OrderToCreate {
    basketId: string;
    deliveryMethodId: number;
    shipToAddress: Address;
}

export interface Order {
    id: number;
    buyerEmail: string;
    orderDate: string;
    shipToAddress: Address;
    deliveryMethod: string;
    shippingPrice: number;
    orderItems: OrderItem[];
    subtotal: number;
    status: string;
  }

  export interface OrderItem {
    productId: number;
    productName: string;
    pictureUrl: string;
    price: number;
    quantity: number;
  }
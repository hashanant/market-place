export interface IItems {
  id: string;
  name: string;
  description: string;
  image: any;
  price: number;
}

export interface ICartItem {
  id: string;
  name?: string;
  price: number;
  qty: number;
}

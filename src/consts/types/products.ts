export interface Product {
  id: string;
  name: string;
  description?: string;
  coverImg: string;
  img: string[];
  price: number;
  onOffer: boolean;
  discount?: number;
  productType: string;
  categories: string[];
}

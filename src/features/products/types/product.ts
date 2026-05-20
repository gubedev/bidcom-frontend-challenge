export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  sku: string;
  description?: string;
  brand?: string;
  category?: string;
  rating?: number;
  stock?: number;
  images?: string[];
}

export type Category = string;

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

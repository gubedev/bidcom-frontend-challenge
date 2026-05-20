import type { Product, Category } from "@/features/products/types";

export const mockProduct: Product = {
  id: 1,
  title: "Apple MacBook Pro 14 M3",
  price: 1299,
  thumbnail: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
  sku: "apple-mbp-14-m3",
  brand: "Apple",
  category: "laptops",
  rating: 4.8,
  stock: 10,
  description: "The MacBook Pro 14 with M3 chip delivers exceptional performance.",
};

export const mockProducts: Product[] = [
  mockProduct,
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    price: 1199,
    thumbnail: "https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s24-ultra/thumbnail.webp",
    sku: "samsung-s24-ultra",
    brand: "Samsung",
    category: "smartphones",
    rating: 4.7,
    stock: 25,
  },
  {
    id: 3,
    title: 'Sony Bravia XR 65" OLED 4K',
    price: 2499,
    thumbnail: "https://cdn.dummyjson.com/product-images/televisions/sony-bravia-xr-oled-4k/thumbnail.webp",
    sku: "sony-bravia-65-oled",
    brand: "Sony",
    category: "televisions",
    rating: 4.9,
    stock: 5,
  },
  {
    id: 4,
    title: "Producto con un título extremadamente largo que debería quedar en más de una línea para testear el line-clamp",
    price: 499,
    thumbnail: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
    sku: "producto-titulo-largo",
    brand: "Generic",
    category: "electronics",
    rating: 3.5,
    stock: 100,
  },
];

export const mockCategories: Category[] = [
  { slug: "laptops", name: "Laptops", url: "https://dummyjson.com/products/category/laptops" },
  { slug: "smartphones", name: "Smartphones", url: "https://dummyjson.com/products/category/smartphones" },
  { slug: "televisions", name: "Televisores", url: "https://dummyjson.com/products/category/televisions" },
  { slug: "tablets", name: "Tablets", url: "https://dummyjson.com/products/category/tablets" },
  { slug: "audio", name: "Audio", url: "https://dummyjson.com/products/category/audio" },
];

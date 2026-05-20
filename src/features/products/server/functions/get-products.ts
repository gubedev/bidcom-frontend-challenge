import "server-only";
import { cacheLife } from "next/cache";
import { env } from "@/config/env";
import type { ProductsResponse } from "@/features/products/types";

export const PRODUCTS_LIMIT = 20;

export async function getProducts(query: string): Promise<ProductsResponse> {
  "use cache";
  cacheLife("minutes");

  const url = query
    ? `${env.API_BASE_URL}/products/search?q=${encodeURIComponent(query)}&limit=${PRODUCTS_LIMIT}`
    : `${env.API_BASE_URL}/products?limit=${PRODUCTS_LIMIT}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

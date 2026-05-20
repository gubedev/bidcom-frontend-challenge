import "server-only";
import { cacheLife } from "next/cache";
import { env } from "@/config/env";
import type { Product, ProductsResponse } from "@/features/products/types";

export async function getProductBySku(sku: string): Promise<Product | null> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(
    `${env.API_BASE_URL}/products/search?q=${encodeURIComponent(sku)}&limit=100`
  );
  if (!res.ok) return null;
  const data: ProductsResponse = await res.json();
  return data.products.find((p) => p.sku === sku) ?? null;
}

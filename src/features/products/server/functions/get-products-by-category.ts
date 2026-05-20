import "server-only";
import { cacheLife } from "next/cache";
import { env } from "@/config/env";
import type { ProductsResponse } from "@/features/products/types";
import { PRODUCTS_LIMIT } from "./get-products";

export async function getProductsByCategory(category: string): Promise<ProductsResponse> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(
    `${env.API_BASE_URL}/products/category/${encodeURIComponent(category)}?limit=${PRODUCTS_LIMIT}`
  );
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json();
}

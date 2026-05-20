import "server-only";
import { cacheLife } from "next/cache";
import { env } from "@/config/env";
import type { Product } from "@/features/products/types";

export async function getProductById(id: number): Promise<Product | null> {
  "use cache";
  cacheLife("minutes");

  const res = await fetch(`${env.API_BASE_URL}/products/${id}`);
  if (!res.ok) return null;
  return res.json();
}

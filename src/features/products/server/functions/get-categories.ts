import "server-only";
import { cacheLife } from "next/cache";
import { env } from "@/config/env";
import type { Category } from "@/features/products/types";

export async function getCategories(): Promise<Category[]> {
  "use cache";
  cacheLife("hours");

  const res = await fetch(`${env.API_BASE_URL}/products/category-list`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

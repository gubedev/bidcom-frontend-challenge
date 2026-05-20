import { Suspense } from "react";
import { getProducts } from "@/features/products/server/functions/get-products";
import { getProductsByCategory } from "@/features/products/server/functions/get-products-by-category";
import { getCategories } from "@/features/products/server/functions/get-categories";
import ProductGrid from "@/features/products/components/product-grid";
import ProductGridSkeleton from "@/features/products/components/product-grid-skeleton";
import EmptyState from "@/features/products/components/empty-state";
import Container from "@/components/ui/container";

interface SearchResultsProps {
  searchParams: Promise<{ s?: string }>;
}

async function SearchResults({ searchParams }: SearchResultsProps) {
  const { s = "" } = await searchParams;

  const categories = await getCategories();
  const isCategory = s !== "" && categories.includes(s);

  const { products } = isCategory
    ? await getProductsByCategory(s)
    : await getProducts(s);

  return (
    <>
      {s && (
        <h1 className="text-xl font-semibold text-body-text mb-6">
          Resultados para: <span className="font-bold">&ldquo;{s}&rdquo;</span>
        </h1>
      )}
      {products.length > 0 ? (
        <ProductGrid products={products} />
      ) : (
        <EmptyState categories={categories.slice(0, 5)} />
      )}
    </>
  );
}

export function generateMetadata() {
  return { title: "Búsqueda — Bidcom" };
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  return (
    <Container className="py-8">
      <Suspense fallback={<ProductGridSkeleton />}>
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </Container>
  );
}

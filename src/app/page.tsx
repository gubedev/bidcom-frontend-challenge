import { Suspense } from "react";
import { getProducts } from "@/features/products/server/functions";
import ProductGrid from "@/features/products/components/product-grid";
import ProductGridSkeleton from "@/features/products/components/product-grid-skeleton";
import Container from "@/components/ui/container";

async function FeaturedProducts() {
  const { products } = await getProducts("");
  return <ProductGrid products={products} />;
}

export default function Home() {
  return (
    <Container className="py-8">
      <Suspense fallback={<ProductGridSkeleton />}>
        <FeaturedProducts />
      </Suspense>
    </Container>
  );
}

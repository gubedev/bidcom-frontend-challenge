import ProductGridSkeleton from "@/features/products/components/product-grid-skeleton";
import Container from "@/components/ui/container";

export default function SearchLoading() {
  return (
    <Container className="py-8">
      <ProductGridSkeleton />
    </Container>
  );
}

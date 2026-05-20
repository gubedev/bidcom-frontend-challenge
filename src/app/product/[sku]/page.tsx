import { notFound } from "next/navigation";
import { getProductBySku } from "@/features/products/server/functions/get-product-by-sku";
import Container from "@/components/ui/container";
import ProductDetail from "@/features/products/components/product-detail";

interface ProductPageProps {
  params: Promise<{ sku: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { sku } = await params;
  const product = await getProductBySku(sku);
  if (!product) return { title: "Producto no encontrado — Bidcom" };
  return { title: `${product.title} — Bidcom` };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { sku } = await params;
  const product = await getProductBySku(sku);

  if (!product) notFound();

  return (
    <Container className="py-8">
      <ProductDetail product={product} />
    </Container>
  );
}

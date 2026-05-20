import { notFound } from "next/navigation";
import { getProductById } from "@/features/products/server/functions/get-product-by-id";
import Container from "@/components/ui/container";
import ProductDetail from "@/features/products/components/product-detail";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!product) return { title: "Producto no encontrado — Bidcom" };
  return { title: `${product.title} — Bidcom` };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) notFound();

  return (
    <Container className="py-8">
      <ProductDetail product={product} />
    </Container>
  );
}

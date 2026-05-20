import Image from "next/image";
import type { Product } from "@/features/products/types";
import { formatPrice } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const mainImage = product.images?.[0] ?? product.thumbnail;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        <Image
          src={mainImage}
          alt={product.title}
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      <div className="flex flex-col gap-5">
        {product.brand && (
          <p className="text-sm text-gray-500 uppercase tracking-widest font-medium">
            {product.brand}
          </p>
        )}

        <h1 className="text-2xl sm:text-3xl font-bold text-body-text leading-tight">
          {product.title}
        </h1>

        <p className="text-3xl font-bold text-brand">
          {formatPrice(product.price)}
        </p>

        {product.description && (
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>
        )}

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-gray-100 pt-5">
          <dt className="text-gray-500">SKU</dt>
          <dd className="text-body-text font-medium">{product.sku}</dd>

          {product.category && (
            <>
              <dt className="text-gray-500">Categoría</dt>
              <dd className="text-body-text capitalize">{product.category}</dd>
            </>
          )}

          {product.stock !== undefined && (
            <>
              <dt className="text-gray-500">Stock</dt>
              <dd className="text-body-text">{product.stock} unidades</dd>
            </>
          )}

          {product.rating !== undefined && (
            <>
              <dt className="text-gray-500">Valoración</dt>
              <dd className="text-body-text">{product.rating} / 5</dd>
            </>
          )}
        </dl>
      </div>
    </div>
  );
}

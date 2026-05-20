import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/features/products/types";
import { paths } from "@/config/paths";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={paths.product.getHref(product.sku)}
      className="group flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative aspect-square bg-gray-50">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <p className="text-sm text-body-text line-clamp-2 leading-snug">
          {product.title}
        </p>
        <p className="text-lg font-bold text-body-text">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

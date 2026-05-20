import Link from "next/link";
import type { Category } from "@/features/products/types";
import { paths } from "@/config/paths";

interface EmptyStateProps {
  categories: Category[];
}

export default function EmptyState({ categories }: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-4">
      <p className="text-lg text-gray-600 mb-6">
        No se encontró ningún producto. Te recomendamos buscar estas categorías.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={paths.search.getHref(cat.slug)}
            className="bg-gray-100 hover:bg-brand hover:text-white text-body-text text-sm px-4 py-2 rounded-full transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

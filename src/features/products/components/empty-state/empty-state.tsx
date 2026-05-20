import Link from "next/link";
import { paths } from "@/config/paths";

interface EmptyStateProps {
  categories: string[];
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
            key={cat}
            href={paths.search.getHref(cat)}
            className="bg-gray-100 hover:bg-brand hover:text-white text-body-text text-sm px-4 py-2 rounded-full transition-colors capitalize"
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

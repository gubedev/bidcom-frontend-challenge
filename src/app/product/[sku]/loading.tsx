import Container from "@/components/ui/container";

export default function ProductLoading() {
  return (
    <Container className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 animate-pulse">
        <div className="aspect-square bg-gray-200 rounded-lg" />
        <div className="flex flex-col gap-5">
          <div className="h-4 bg-gray-200 rounded w-24" />
          <div className="h-8 bg-gray-200 rounded w-full" />
          <div className="h-8 bg-gray-200 rounded w-2/3" />
          <div className="h-10 bg-gray-200 rounded w-1/3" />
          <div className="space-y-2 pt-5 border-t border-gray-100">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
          </div>
        </div>
      </div>
    </Container>
  );
}

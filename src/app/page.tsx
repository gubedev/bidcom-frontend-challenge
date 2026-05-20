import { Header, Footer } from "@/components/layout";
import { Hero } from "@/features/home/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

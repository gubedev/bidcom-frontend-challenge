import Link from "next/link";

const QUICK_ACCESS = [
  "Smart TV",
  "Aspiradoras Robot",
  "Drones",
  "Cafeteras",
  "Proyectores",
  "Masajeadores",
];

export default function Hero() {
  return (
    <section>
      <div className="bg-gradient-to-r from-brand to-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-white/80 mb-2">
              Hot Days 2026
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Hot Days 2026 en Bidcom 🎉
              <br />
              <span className="text-white/90">¡Tecnología y Electro en Oferta!</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 mb-8">
              25% OFF en 1 pago · Hasta 12 cuotas sin interés con todos los bancos
            </p>
            <Link
              href="/search?s="
              className="inline-block bg-white text-brand font-bold px-8 py-3 rounded-full text-sm sm:text-base hover:bg-gray-100 transition-colors"
            >
              Ver ofertas
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 py-3">
          {QUICK_ACCESS.map((item) => (
            <Link
              key={item}
              href={`/search?s=${encodeURIComponent(item)}`}
              className="whitespace-nowrap flex-shrink-0 bg-gray-100 hover:bg-brand hover:text-white text-body-text text-sm px-4 py-1.5 rounded-full transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "Medios de Envío",
    links: ["Cómo comprar", "Seguimiento de pedidos", "Política de devoluciones", "Cambios y garantías"],
  },
  {
    title: "Medios de Pago",
    links: ["Tarjetas de crédito", "Tarjetas de débito", "Transferencia bancaria", "Cuotas sin interés"],
  },
  {
    title: "Atención al Cliente",
    links: ["Centro de ayuda", "Preguntas frecuentes", "Estado de tu envío", "Contacto"],
  },
  {
    title: "Bidcom",
    links: ["Quiénes somos", "Sucursales", "Trabaja con nosotros", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-footer-sub mt-10 pt-8">
          <p className="text-sm text-gray-400">
            WhatsApp (sólo texto):{" "}
            <a href="https://wa.me/5491168652233" className="text-white hover:text-brand transition-colors font-medium">
              11 6865 2233
            </a>
          </p>
        </div>
      </div>

      <div className="bg-footer-sub border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025 Bidcom. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Términos y condiciones</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

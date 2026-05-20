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
                    <span className="text-sm text-gray-400 cursor-default">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-footer-sub mt-10 pt-8">
          <p className="text-sm text-gray-400">
            WhatsApp (sólo texto):{" "}
            <span className="text-white font-medium cursor-default">
              11 6865 2233
            </span>
          </p>
        </div>
      </div>

      <div className="bg-footer-sub border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025 Bidcom. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <span className="cursor-default">Términos y condiciones</span>
            <span className="cursor-default">Política de privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

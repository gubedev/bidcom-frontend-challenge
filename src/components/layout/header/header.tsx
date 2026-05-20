import Link from "next/link";

function SearchForm({ className }: { className?: string }) {
  return (
    <form
      action="/search"
      method="get"
      role="search"
      className={`flex items-center bg-white rounded overflow-hidden ${className ?? ""}`}
    >
      <input
        type="search"
        name="s"
        placeholder="¿Qué estás buscando?"
        autoComplete="off"
        className="flex-1 min-w-0 px-4 py-2 text-sm text-gray-800 outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-white hover:bg-gray-100 transition-colors flex-shrink-0"
        aria-label="Buscar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>
      </button>
    </form>
  );
}

export default function Header() {
  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{ background: "var(--brand-blue)" }}
    >
      {/* Fila principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 h-16">

        {/* Hamburger — mobile only */}
        <div className="flex flex-col justify-center gap-1.5 lg:hidden flex-shrink-0 cursor-default">
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </div>

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo-bidcom.svg"
            alt="Bidcom"
            style={{ height: "2rem", width: "auto" }}
          />
        </Link>

        {/* Search bar — sm+ */}
        <SearchForm className="flex-1 max-w-2xl hidden sm:flex" />

        {/* Contact + cart */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0 flex-shrink-0">

          {/* Phone info — desktop only */}
          <div className="hidden lg:flex flex-col text-white text-xs leading-tight cursor-default">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.847L.057 23.944l6.305-1.654A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.01-1.374l-.359-.214-3.742.981.999-3.645-.234-.374A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              11 6865 2233 <span className="opacity-75">(sólo texto)</span>
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0810 112 1102 <span className="opacity-75">(venta telefónica)</span>
            </div>
          </div>

          {/* Cart */}
          <div
            className="relative flex items-center justify-center text-white cursor-default"
            aria-label="Carrito"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.87-7.16a.75.75 0 00-.712-.99H5.25M7.5 14.25L5.106 5.272M7.5 14.25l-2.193 2.192A1.5 1.5 0 006.75 19.5h10.5a1.5 1.5 0 001.5-1.5v-2.25"
              />
            </svg>
          </div>

        </div>
      </div>

      {/* Fila de búsqueda — mobile only */}
      <div className="sm:hidden px-4 pb-3">
        <SearchForm className="flex w-full" />
      </div>
    </header>
  );
}

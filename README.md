# Bidcom Frontend Challenge

Evaluación técnica frontend para Bidcom. Aplicación e-commerce construida con Next.js tomando como referencia el diseño de [bidcom.com.ar](https://bidcom.com.ar) y datos de producto provistos por [DummyJSON](https://dummyjson.com).

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Datos | DummyJSON API |
| Runtime | React 19 (Server Components first) |

---

## Comandos

```bash
npm run dev            # servidor de desarrollo → http://localhost:3000
npm run build          # build de producción
npm run start          # servidor de producción
npm run lint           # ESLint
npm run storybook      # Storybook → http://localhost:6006
npm run build-storybook  # build estático de Storybook
```

---

## Estructura del proyecto

```
src/
├── app/                            # Rutas (Next.js App Router)
│   ├── page.tsx                    # Home /
│   ├── loading.tsx                 # Skeleton home
│   ├── search/
│   │   ├── page.tsx                # Listado /search?s=$term
│   │   └── loading.tsx             # Skeleton búsqueda
│   └── product/[sku]/page.tsx      # Detalle /product/$sku
│
├── features/
│   ├── home/components/
│   │   └── hero/                   # hero/, hero.tsx, index.ts
│   └── products/
│       ├── components/
│       │   ├── product-card/       # component + stories + index
│       │   ├── product-grid/       # component + stories + index
│       │   ├── product-grid-skeleton/ # component + stories + index
│       │   └── empty-state/        # component + stories + index
│       ├── server/functions/       # get-products, get-categories, get-product-by-sku
│       ├── types/                  # Product, Category
│       └── mocks.ts                # fixtures para Storybook
│
├── components/
│   ├── layout/
│   │   ├── header/                 # component + stories + index
│   │   └── footer/                 # component + stories + index
│   └── ui/
│       └── container/              # component + index
│
├── config/
│   ├── paths.ts                    # Rutas type-safe
│   └── env.ts                      # Variables de entorno
└── lib/utils.ts                    # formatPrice, helpers
```

> Cada componente vive en su propia carpeta con tres archivos: el componente (`*.tsx`), su story (`*.stories.tsx`) y un barrel de exportación (`index.ts`).

---

## Requerimientos funcionales

| ID | Descripción | Estado |
|---|---|---|
| RF-01 | Home `/` — layout con Header, Hero y Footer | ✅ |
| RF-02 | Header — logo con link a `/`, barra de búsqueda que redirige a `/search?s=$term` | ✅ |
| RF-03 | Card de producto — imagen, nombre y precio | ✅ |
| RF-04 | Página `/search?s=$term` — grid responsive de hasta 20 productos desde DummyJSON | ⬜ |
| RF-05 | `/search` — click en card navega a `/product/$sku` | ⬜ |
| RF-06 | `/search` — estado vacío con mensaje y 5 categorías sugeridas | ⬜ |
| RF-07 | Página `/product/$sku` — detalle del producto | ⬜ |

## Requerimientos no funcionales

| ID | Tipo | Descripción | Estado |
|---|---|---|---|
| RNF-01 | Excluyente | TypeScript en todo el proyecto | ✅ |
| RNF-02 | Excluyente | Tests de integración y/o unitarios | ⬜ |
| RNF-03 | Excluyente | Next.js última versión (v16) | ✅ |
| RNF-04 | Excluyente | Tailwind CSS última versión (v4) | ✅ |
| RNF-05 | Excluyente | Diseño responsive / mobile first | ✅ |
| RNF-06 | Excluyente | Server-side oriented (Server Components) | ✅ |
| RNF-07 | Excluyente | Buenas prácticas de componetización | ✅ |
| RNF-08 | Deseado | Principios SOLID | ✅ |
| RNF-09 | Deseado | Clean Architecture | ✅ |
| RNF-10 | Deseado | Design System | ⬜ |
| RNF-11 | Deseado | Storybook | ⬜ |

---

## API — DummyJSON

| Endpoint | Uso |
|---|---|
| `GET /products/search?q={term}&limit=20` | Búsqueda de productos |
| `GET /products/categories` | Listado de categorías |
| `GET /products/search?q={sku}` | Obtener producto por SKU |

Base URL: `https://dummyjson.com`

---

## Convenciones

- **Archivos y carpetas:** kebab-case (`product-card.tsx`, `get-products.ts`)
- **Componentes:** PascalCase (`ProductCard`, `Header`)
- **Funciones:** camelCase (`getProducts`, `formatPrice`)
- **Tipos:** PascalCase (`Product`, `Category`)
- **Constantes:** UPPER_SNAKE_CASE (`PRODUCTS_LIMIT`)
- **Rutas:** siempre vía `paths` de `@/config/paths.ts`

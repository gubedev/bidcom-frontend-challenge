# Next.js Conventions

## Routing and file structure

Routes live under `src/app/`. Each folder maps to a URL segment. A route is only publicly accessible when it contains a `page.tsx` or `route.ts` file.

### Special files per segment

| File | Purpose |
|---|---|
| `layout.tsx` | Wraps the segment and its children; persists across navigations |
| `page.tsx` | Public UI for the segment |
| `loading.tsx` | Skeleton shown while the segment loads (wraps `page` in `<Suspense>`) |
| `error.tsx` | Error boundary for the segment (requires `"use client"`) |
| `not-found.tsx` | UI rendered when `notFound()` is called |
| `route.ts` | API endpoint (no UI) |
| `template.tsx` | Like `layout` but re-renders on every navigation |

### Render hierarchy

```
layout → template → error → loading → not-found → page
```

### Special segment conventions

```
[slug]          → dynamic parameter
[...slug]       → catch-all
[[...slug]]     → optional catch-all
(group)         → groups routes without affecting the URL
_folder         → excluded from the routing system
@slot           → parallel route (slot rendered by the parent layout)
(.)folder       → intercepts the same level
(..)folder      → intercepts one level up
```

---

## Server vs Client Components

**Everything is a Server Component by default.** Add `"use client"` only when necessary.

Use a **Client Component** when you need:
- `useState`, `useEffect`, or any state/effect hook
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`localStorage`, `window`, `navigator`)

Use a **Server Component** when you need:
- Data fetching from databases or APIs with credentials
- Private environment variables (no `NEXT_PUBLIC_` prefix)
- Smaller client JavaScript bundles

**Rule:** `"use client"` marks a boundary — all imports and child components in that file become part of the client bundle. Push it as deep in the tree as possible.

```tsx
// layout.tsx — Server Component
import Search from './search'   // Client Component
import Logo from './logo'       // Server Component

export default function Layout({ children }) {
  return (
    <nav>
      <Logo />
      <Search />   {/* only Search goes into the client bundle */}
    </nav>
  )
}
```

To pass a Server Component inside a Client Component, use the `children` pattern:

```tsx
// modal.tsx
'use client'
export default function Modal({ children }) {
  return <div>{children}</div>
}

// page.tsx (Server Component)
import Modal from './modal'
import Cart from './cart'   // Server Component passed as children
export default function Page() {
  return <Modal><Cart /></Modal>
}
```

---

## Data Fetching

### In Server Components

```tsx
// direct fetch — not cached by default
export default async function Page() {
  const data = await fetch('https://api.example.com/posts')
  const posts = await data.json()
  return <ul>{posts.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}
```

Identical requests within the same component tree are automatically memoized by React.

**Parallel vs sequential:**

```tsx
// ❌ sequential — albums waits for artist
const artist = await getArtist(username)
const albums = await getAlbums(username)

// ✅ parallel
const [artist, albums] = await Promise.all([getArtist(username), getAlbums(username)])
```

### In Client Components

Use SWR or React Query for client-side fetching. Alternative: pass an un-awaited Promise from a Server Component and resolve it with `use()`.

```tsx
// page.tsx (Server)
const posts = getPosts()  // no await
return <Suspense fallback={<Skeleton />}><Posts posts={posts} /></Suspense>

// posts.tsx (Client)
'use client'
import { use } from 'react'
export default function Posts({ posts }) {
  const data = use(posts)
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}
```

---

## Caching with `use cache`

Enable in `next.config.ts`:

```ts
const nextConfig = { cacheComponents: true }
```

The `'use cache'` directive caches the return value of an async function or component. Arguments are automatically included in the cache key.

```tsx
// Data-level
import { cacheLife } from 'next/cache'

export async function getProducts() {
  'use cache'
  cacheLife('hours')
  return db.query('SELECT * FROM products')
}

// UI-level
export default async function Page() {
  'use cache'
  cacheLife('hours')
  const products = await getProducts()
  return <ProductList products={products} />
}
```

**Available lifetimes:** `'seconds'`, `'minutes'`, `'hours'`, `'days'`, `'weeks'`, `'max'`.

To manually invalidate:

```tsx
import { cacheTag, updateTag } from 'next/cache'

// when caching
cacheTag('products')

// inside a Server Action
updateTag('products')
```

### Uncached (runtime) data

Components that access `cookies()`, `headers()`, `searchParams`, or perform fetches without `use cache` must be wrapped in `<Suspense>`:

```tsx
export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <PersonalizedContent />
    </Suspense>
  )
}
```

If not wrapped, Next.js throws a build error: `Uncached data was accessed outside of <Suspense>`.

---

## Mutations with Server Actions

```tsx
async function createProduct(formData: FormData) {
  'use server'
  await db.product.create({ data: { name: formData.get('name') } })
  updateTag('products')     // invalidate cache
  revalidatePath('/products')
}

export default function Form() {
  return (
    <form action={createProduct}>
      <input name="name" required />
      <button type="submit">Create</button>
    </form>
  )
}
```

---

## Environment variables

| Prefix | Available in |
|---|---|
| No prefix | Server only |
| `NEXT_PUBLIC_` | Server and client (included in the bundle) |

Never expose API keys, tokens, or secrets via `NEXT_PUBLIC_`. To mark a module as server-only:

```ts
import 'server-only'
```

---

## Metadata and SEO

Export `metadata` (static) or `generateMetadata` (dynamic) from `layout.tsx` or `page.tsx`:

```tsx
// Static
export const metadata = {
  title: 'My page',
  description: '...',
}

// Dynamic
export async function generateMetadata({ params }) {
  const product = await getProduct(params.slug)
  return { title: product.name }
}
```

Special files in `src/app/`:
- `favicon.ico` / `icon.svg` → favicon
- `opengraph-image.png` → OG image
- `sitemap.ts` → generated sitemap
- `robots.ts` → generated robots.txt

---

## Path aliases

`@/*` points to `src/*`.

```ts
import { Button } from '@/components/ui/button'
import { getProducts } from '@/lib/data'
```

export const paths = {
  home: {
    getHref: () => "/",
  },
  search: {
    getHref: (q: string) => `/search?s=${encodeURIComponent(q)}`,
  },
  product: {
    getHref: (sku: string) => `/product/${sku}`,
  },
} as const;

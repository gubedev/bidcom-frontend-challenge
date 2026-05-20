export const paths = {
  home: {
    getHref: () => "/",
  },
  search: {
    getHref: (q: string) => `/search?s=${encodeURIComponent(q)}`,
  },
  product: {
    getHref: (id: number) => `/product/${id}`,
  },
} as const;

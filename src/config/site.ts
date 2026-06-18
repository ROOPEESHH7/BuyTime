export const siteConfig = {
  name: "BuyTime",
  description:
    "BuyTime — a modern e-commerce platform for discovering and purchasing quality products.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/buytime",
    github: "https://github.com/buytime",
  },
  nav: {
    main: [
      { title: "Shop", href: "/shop" },
      { title: "Categories", href: "/categories" },
      { title: "About", href: "/about" },
    ],
    footer: [
      { title: "Privacy", href: "/privacy" },
      { title: "Terms", href: "/terms" },
      { title: "Contact", href: "/contact" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

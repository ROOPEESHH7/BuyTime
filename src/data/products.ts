import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "MacBook Pro M4",
    category: "Computers",
    price: 1999,
    originalPrice: 2199,
    rating: 4.9,
    image:  "/products/laptop.jpeg",
    badge: "New",
    color: "from-sky-500 to-cyan-500",
    featured: true,
  },

  {
    id: "2",
    name: "iPhone 16 Pro",
    category: "Phones",
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    image: "/products/iphone.jpeg",
    badge: "Hot",
    color: "from-violet-500 to-indigo-500",
    featured: true,
  },

  {
    id: "3",
    name: "Sony WH-1000XM5",
    category: "Audio",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    image: "/products/headphones.jpeg",
    badge: "Sale",
    color: "from-green-500 to-emerald-500",
    featured: true,
  },

  {
    id: "4",
    name: "Apple Watch Ultra",
    category: "Wearables",
    price: 799,
    originalPrice: 899,
    rating: 4.7,
    image: "/products/watch.jpeg",
    badge: "Top",
    color: "from-orange-500 to-amber-500",
    featured: true,
  },
];

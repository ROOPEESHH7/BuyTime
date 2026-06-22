"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Star,
  Laptop,
  Smartphone,
  Headphones,
  Watch,
} from "lucide-react";

const products = [
  {
    name: "MacBook Pro M4",
    price: "$1,999",
    oldPrice: "$2,199",
    rating: 4.9,
    badge: "New",
    icon: Laptop,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "iPhone 16 Pro",
    price: "$999",
    oldPrice: "$1,099",
    rating: 4.8,
    badge: "Hot",
    icon: Smartphone,
    color: "from-violet-500 to-indigo-500",
  },
  {
    name: "Sony WH-1000XM5",
    price: "$349",
    oldPrice: "$399",
    rating: 4.9,
    badge: "Sale",
    icon: Headphones,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Apple Watch Ultra",
    price: "$799",
    oldPrice: "$899",
    rating: 4.7,
    badge: "Top",
    icon: Watch,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="mt-4 text-slate-400">
            Hand-picked premium products loved by thousands.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-950 p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold">
                    {product.badge}
                  </span>

                  <Heart className="cursor-pointer text-slate-500 transition hover:text-red-500" />
                </div>

                <div
                  className={`mb-6 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color}`}
                >
                  <Icon size={70} />
                </div>

                <h3 className="text-xl font-bold">
                  {product.name}
                </h3>

                <div className="mt-3 flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span>{product.rating}</span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="text-2xl font-bold">
                    {product.price}
                  </span>

                  <span className="text-slate-500 line-through">
                    {product.oldPrice}
                  </span>
                </div>

                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
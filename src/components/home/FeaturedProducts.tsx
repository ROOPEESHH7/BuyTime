"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { products } from "@/data/products";

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
          {products.map((product, index) => (
            <motion.div
              key={product.id}
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
                className={`mb-6 flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <div className="mt-2 text-sm text-slate-400">
                {product.category}
              </div>

              <div className="mt-3 flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span>{product.rating}</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-2xl font-bold">
                  ${product.price.toLocaleString()}
                </span>

                {product.originalPrice && (
                  <span className="text-slate-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
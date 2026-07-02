"use client";

import { motion } from "framer-motion";
import ProductGrid from "@/components/products/ProductGrid";

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

        <ProductGrid />
      </div>
    </section>
  );
}
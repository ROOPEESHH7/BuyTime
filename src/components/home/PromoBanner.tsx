"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 py-24 text-white">
      {/* Decorative Blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
            🔥 Limited Time Offer
          </span>

          <h2 className="mt-8 text-5xl font-extrabold md:text-6xl">
            Save Up To
            <span className="block text-yellow-300">50% OFF</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Discover premium electronics, fashion, accessories and home
            essentials with exclusive discounts available for a limited time.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Shop Deals
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
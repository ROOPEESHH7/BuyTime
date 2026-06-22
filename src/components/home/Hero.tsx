"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 py-28 text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            🚀 Premium Shopping Experience
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Buy Smarter.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Save Time.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-slate-300">
            Discover premium electronics, fashion, gadgets and daily essentials
            with a lightning-fast shopping experience designed for everyone.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500">
              <ShoppingBag size={20} />
              Shop Now
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold backdrop-blur transition hover:bg-white/10">
              Explore
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ["10K+", "Products"],
              ["50K+", "Customers"],
              ["99%", "Positive Reviews"],
              ["24/7", "Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <h3 className="text-3xl font-bold">{value}</h3>
                <p className="text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative hidden h-[550px] lg:block"
>
  {/* Floating Background Glow */}
  <div className="absolute left-20 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
  <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

  {/* Laptop Card */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute left-8 top-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
  >
    <div className="text-5xl">💻</div>
    <h3 className="mt-3 text-lg font-semibold">MacBook Pro</h3>
    <p className="text-sm text-slate-400">$1,999</p>
  </motion.div>

  {/* Phone Card */}
  <motion.div
    animate={{ y: [0, 15, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute right-8 top-24 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
  >
    <div className="text-5xl">📱</div>
    <h3 className="mt-3 text-lg font-semibold">iPhone</h3>
    <p className="text-sm text-slate-400">From $899</p>
  </motion.div>

  {/* Headphones */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute bottom-28 left-20 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
  >
    <div className="text-5xl">🎧</div>
    <h3 className="mt-3 text-lg font-semibold">Sony XM5</h3>
    <p className="text-sm text-slate-400">$349</p>
  </motion.div>

  {/* Watch */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 5.5, repeat: Infinity }}
    className="absolute bottom-6 right-14 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl"
  >
    <div className="text-5xl">⌚</div>
    <h3 className="mt-3 text-lg font-semibold">Apple Watch</h3>
    <p className="text-sm text-slate-400">$499</p>
  </motion.div>
</motion.div>
      </div>
    </section>
  );
}
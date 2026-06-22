"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Shirt,
  Laptop,
  Watch,
  Headphones,
  House,
} from "lucide-react";

const categories = [
  {
    title: "Electronics",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Fashion",
    icon: Shirt,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Computers",
    icon: Laptop,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Wearables",
    icon: Watch,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Audio",
    icon: Headphones,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Home",
    icon: House,
    color: "from-orange-500 to-yellow-500",
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-bold">
            Browse Categories
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need in one modern marketplace.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur transition"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Explore premium {category.title.toLowerCase()} products.
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
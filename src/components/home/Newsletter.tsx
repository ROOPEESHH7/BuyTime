"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-center shadow-2xl"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
            <Mail className="h-8 w-8 text-white" />
          </div>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Join Our Newsletter
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Subscribe to receive exclusive offers, product launches,
            discounts, and shopping tips directly in your inbox.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none transition focus:border-blue-500"
            />

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500">
              Subscribe
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
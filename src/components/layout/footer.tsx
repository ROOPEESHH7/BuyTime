"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              BuyTime
            </h2>

            <p className="mt-4 text-slate-400">
              BuyTime is a modern premium e-commerce platform built
              for fast, secure and enjoyable online shopping.
            </p>

            <div className="mt-6 flex gap-4">
              <Facebook className="cursor-pointer text-slate-400 transition hover:text-blue-400" />
              <Instagram className="cursor-pointer text-slate-400 transition hover:text-pink-400" />
              <Twitter className="cursor-pointer text-slate-400 transition hover:text-sky-400" />
              <Github className="cursor-pointer text-slate-400 transition hover:text-white" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Shop
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="#" className="text-slate-400 hover:text-white">
                Electronics
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                Fashion
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                Accessories
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link href="#" className="text-slate-400 hover:text-white">
                About Us
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                Careers
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                Contact
              </Link>

              <Link href="#" className="text-slate-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-4 flex items-center gap-3 text-slate-400">
              <Mail size={18} />
              support@buytime.com
            </div>

            <p className="mt-4 text-slate-400">
              Available 24/7 for customer support.
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} BuyTime. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

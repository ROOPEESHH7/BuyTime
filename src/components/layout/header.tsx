import Link from "next/link";
import { Heart, Search, ShoppingCart, User } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent"
          >
            {siteConfig.name}
          </Link>
  
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-cyan-300"
              >
                {item.title}
              </Link>
            ))}
  
            <Link
              href="/deals"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              Deals
            </Link>
  
            <Link
              href="/new"
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              New Arrivals
            </Link>
          </nav>
  
          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button className="hidden rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10 lg:flex">
              <Search size={18} />
            </button>
  
            {/* Wishlist */}
            <button className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10">
              <Heart size={18} />
            </button>
  
            {/* Cart */}
            <button className="relative rounded-xl border border-white/10 bg-white/5 p-2.5 transition hover:bg-white/10">
              <ShoppingCart size={18} />
  
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-900">
                0
              </span>
            </button>
  
            {/* Login */}
            <button className="hidden items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 font-medium transition hover:bg-blue-500 lg:flex">
              <User size={18} />
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

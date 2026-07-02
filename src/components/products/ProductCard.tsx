"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";

import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="relative rounded-2xl border border-white/10 bg-slate-900 p-6 text-white shadow-lg"
    >
      {/* Badge */}
      <ProductBadge badge={product.badge} />

      {/* Heart */}
      <button className="absolute right-5 top-5 transition hover:scale-110">
        <Heart
          size={22}
          className="text-slate-400 hover:text-red-500"
        />
      </button>

      {/* Product Image */}
      <ProductImage product={product} />

      {/* Product Name */}
      <h3 className="mt-5 text-xl font-bold">
        {product.name}
      </h3>

      {/* Category */}
      <p className="mt-1 text-sm text-slate-400">
        {product.category}
      </p>

      {/* Rating */}
      <ProductRating rating={product.rating} />

      {/* Price */}
      <ProductPrice
        price={product.price}
        originalPrice={product.originalPrice}
      />

      {/* Button */}
      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold transition hover:bg-blue-500"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </motion.button>
    </motion.div>
  );
}
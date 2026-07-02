"use client";

import ProductCard from "./ProductCard";

import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
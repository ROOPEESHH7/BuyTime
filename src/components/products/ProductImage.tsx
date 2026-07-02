"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductImage({ product }: Props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className={`mt-5 flex justify-center rounded-2xl p-4 ${product.color}`}
    >
      <Image
        src={product.image}
        alt={product.name}
        width={260}
        height={260}
        className="object-contain"
      />
    </motion.div>
  );
}
"use client";

type ProductPriceProps = {
  price: number;
  originalPrice?: number;
};

export default function ProductPrice({
  price,
  originalPrice,
}: ProductPriceProps) {
  return (
    <div className="mt-5 flex items-center gap-3">
      <span className="text-2xl font-bold text-white">
        ${price.toLocaleString()}
      </span>

      {originalPrice !== undefined && (
        <span className="text-slate-500 line-through">
          ${originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  );
}
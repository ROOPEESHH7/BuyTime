import { MainLayout } from "@/components/layout/main-layout";
import ProductGrid from "@/components/products/ProductGrid";

export default function ShopPage() {
  return (
    <MainLayout>
      <section className="bg-slate-950 min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10">
            <h1 className="text-5xl font-bold text-white">
              Shop
            </h1>

            <p className="mt-3 text-slate-400">
              Browse our premium collection of products.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>
    </MainLayout>
  );
}
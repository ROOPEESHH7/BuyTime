import db from "@/lib/db";
import type { ProductInput } from "@/lib/validators";

export async function getProducts(options: {
  page?: number;
  pageSize?: number;
  categorySlug?: string;
  search?: string;
} = {}) {
  const { page = 1, pageSize = 12, categorySlug, search } = options;
  const skip = (page - 1) * pageSize;

  const where = {
    isPublished: true,
    ...(categorySlug && {
      category: { slug: categorySlug },
    }),
    ...(search && {
      OR: [
        { name: { contains: search, mode: "insensitive" as const } },
        { description: { contains: search, mode: "insensitive" as const } },
      ],
    }),
  };

  const [items, total] = await Promise.all([
    db.product.findMany({
      where,
      include: { images: { orderBy: { sortOrder: "asc" } } },
      skip,
      take: pageSize,
      orderBy: { createdAt: "desc" },
    }),
    db.product.count({ where }),
  ]);

  return {
    items,
    total,
    page,
    pageSize,
    totalPages: Math.ceil(total / pageSize),
  };
}

export async function getProductBySlug(slug: string) {
  return db.product.findUnique({
    where: { slug },
    include: {
      images: { orderBy: { sortOrder: "asc" } },
      category: true,
      reviews: {
        include: { user: { select: { name: true, image: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
  });
}

export async function createProduct(data: ProductInput) {
  return db.product.create({ data });
}

export async function updateProduct(id: string, data: Partial<ProductInput>) {
  return db.product.update({ where: { id }, data });
}

export async function deleteProduct(id: string) {
  return db.product.delete({ where: { id } });
}

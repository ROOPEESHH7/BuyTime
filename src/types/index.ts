import type { OrderStatus } from "@prisma/client";

export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
};

export type PaginatedResponse<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ProductWithImages = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  compareAt: number | null;
  stock: number;
  isPublished: boolean;
  categoryId: string;
  images: Array<{
    id: string;
    url: string;
    alt: string | null;
  }>;
};

export type CartItemWithProduct = {
  id: string;
  quantity: number;
  product: ProductWithImages;
};

export type OrderWithItems = {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  subtotal: number;
  shippingCost: number;
  tax: number;
  total: number;
  createdAt: Date;
  items: Array<{
    id: string;
    quantity: number;
    price: number;
    product: Pick<ProductWithImages, "id" | "name" | "slug" | "images">;
  }>;
};

export type { OrderStatus };

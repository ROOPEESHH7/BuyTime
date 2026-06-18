import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number | string,
  currency = "USD",
  locale = "en-US",
): string {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function absoluteUrl(path: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ??
    process.env.AUTH_URL ??
    "http://localhost:3000";

  return `${baseUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function generateOrderNumber(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `BT-${timestamp}-${random}`;
}

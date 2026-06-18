export const APP_NAME = "BuyTime";

export const DEFAULT_PAGE_SIZE = 12;

export const ORDER_STATUS_LABELS = {
  PENDING: "Pending",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
  REFUNDED: "Refunded",
} as const;

export const CURRENCY = "USD";

export const IMAGE_UPLOAD = {
  maxSizeMB: 5,
  acceptedTypes: ["image/jpeg", "image/png", "image/webp"],
  folder: "buytime/products",
} as const;

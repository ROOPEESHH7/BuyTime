import db from "@/lib/db";
import { generateOrderNumber } from "@/lib/utils";
import type { AddressInput } from "@/lib/validators";

export async function createOrder(
  userId: string,
  shippingAddress: AddressInput,
) {
  const cart = await db.cart.findUnique({
    where: { userId },
    include: { items: { include: { product: true } } },
  });

  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0,
  );

  const shippingCost = 0;
  const tax = 0;
  const total = subtotal + shippingCost + tax;

  const order = await db.$transaction(async (tx) => {
    const created = await tx.order.create({
      data: {
        orderNumber: generateOrderNumber(),
        userId,
        subtotal,
        shippingCost,
        tax,
        total,
        shippingAddress,
        items: {
          create: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.product.price,
          })),
        },
      },
      include: { items: { include: { product: true } } },
    });

    await tx.cartItem.deleteMany({ where: { cartId: cart.id } });

    return created;
  });

  return order;
}

export async function getOrdersByUser(userId: string) {
  return db.order.findMany({
    where: { userId },
    include: {
      items: {
        include: {
          product: {
            include: { images: { orderBy: { sortOrder: "asc" }, take: 1 } },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getOrderByNumber(orderNumber: string, userId: string) {
  return db.order.findFirst({
    where: { orderNumber, userId },
    include: {
      items: {
        include: {
          product: {
            include: { images: { orderBy: { sortOrder: "asc" }, take: 1 } },
          },
        },
      },
    },
  });
}

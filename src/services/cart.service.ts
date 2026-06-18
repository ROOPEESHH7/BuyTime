import db from "@/lib/db";

export async function getOrCreateCart(userId: string) {
  const existing = await db.cart.findUnique({
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
  });

  if (existing) return existing;

  return db.cart.create({
    data: { userId },
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

export async function addToCart(
  userId: string,
  productId: string,
  quantity = 1,
) {
  const cart = await getOrCreateCart(userId);

  return db.cartItem.upsert({
    where: {
      cartId_productId: { cartId: cart.id, productId },
    },
    update: { quantity: { increment: quantity } },
    create: { cartId: cart.id, productId, quantity },
  });
}

export async function removeFromCart(userId: string, productId: string) {
  const cart = await db.cart.findUnique({ where: { userId } });
  if (!cart) return null;

  return db.cartItem.delete({
    where: {
      cartId_productId: { cartId: cart.id, productId },
    },
  });
}

export async function clearCart(userId: string) {
  const cart = await db.cart.findUnique({ where: { userId } });
  if (!cart) return null;

  return db.cartItem.deleteMany({ where: { cartId: cart.id } });
}

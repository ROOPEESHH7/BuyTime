"use client";

import { useCallback, useEffect, useState } from "react";

type CartItem = {
  productId: string;
  quantity: number;
};

const CART_STORAGE_KEY = "buytime-cart";

function readCartFromStorage(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function writeCartToStorage(items: CartItem[]) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setItems(readCartFromStorage());
    setIsLoaded(true);
  }, []);

  const persist = useCallback((nextItems: CartItem[]) => {
    setItems(nextItems);
    writeCartToStorage(nextItems);
  }, []);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      const existing = items.find((item) => item.productId === productId);

      if (existing) {
        persist(
          items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        );
      } else {
        persist([...items, { productId, quantity }]);
      }
    },
    [items, persist],
  );

  const removeItem = useCallback(
    (productId: string) => {
      persist(items.filter((item) => item.productId !== productId));
    },
    [items, persist],
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }

      persist(
        items.map((item) =>
          item.productId === productId ? { ...item, quantity } : item,
        ),
      );
    },
    [items, persist, removeItem],
  );

  const clearCart = useCallback(() => {
    persist([]);
  }, [persist]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return {
    items,
    itemCount,
    isLoaded,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}

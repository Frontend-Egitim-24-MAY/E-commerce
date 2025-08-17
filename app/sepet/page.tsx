"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/productCard";
import { useBasketStore } from "@/store/basketStore";
import { Product } from "@/types";
import { CartProduct } from "@/components/cartProduct";

interface CartProduct {
  product: Product;
  quantity: number;
}

export default function Sepet() {
  const productList = useBasketStore((state) => state.productList);
  const [cartProductList, setCartProductList] = useState<CartProduct[]>([]);

  // [1,1,1,1,5] -> [(1, 4), (5,1)]

  useEffect(() => {
    const productMap = new Map<number, CartProduct>();

    productList.forEach((product) => {
      if (productMap.has(product.id)) {
        const existing = productMap.get(product.id)!;
        productMap.set(product.id, {
          ...existing,
          quantity: existing.quantity + 1,
        });
      } else {
        productMap.set(product.id, {
          product,
          quantity: 1,
        });
      }
    });

    setCartProductList(Array.from(productMap.values()));
  }, [productList]);

  return (
    <div>
      {cartProductList.map((cartProduct, idx) => (
        <CartProduct
          key={idx}
          product={cartProduct.product}
          quantity={cartProduct.quantity}
        />
      ))}
    </div>
  );
}

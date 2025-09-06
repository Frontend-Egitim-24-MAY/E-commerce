"use client";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/productCard";
import { useBasketStore } from "@/store/basketStore";
import { Product } from "@/types";
import { CartProduct } from "@/components/cartProduct";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

interface CartProduct {
  product: Product;
  quantity: number;
}

export default function Sepet() {
  const productList = useBasketStore((state) => state.productList);
  const [cartProductList, setCartProductList] = useState<CartProduct[]>([]);

  const toplam = productList.reduce(function (acc, product) {
    return acc + product.price;
  }, 0);

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
    <div className="flex w-full gap-4 py-6">
      <div className="space-y-4 w-full">
        {cartProductList.map((cartProduct, idx) => (
          <CartProduct
            key={idx}
            product={cartProduct.product}
            quantity={cartProduct.quantity}
          />
        ))}
      </div>
      <Card className="w-[20%] h-fit p-4 gap-4">
        <div>Toplam Tutar: {toplam.toFixed(2)}$</div>
        <Button variant="faded" color="primary">
          Alışverişi Tamamla
        </Button>
      </Card>
    </div>
  );
}

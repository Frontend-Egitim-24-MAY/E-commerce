"use client";

import { ProductCard } from "@/components/productCard";
import { useBasketStore } from "@/store/basketStore";

export default function Sepet() {
  const productList = useBasketStore((state) => state.productList);

  return (
    <div>
      {productList.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}

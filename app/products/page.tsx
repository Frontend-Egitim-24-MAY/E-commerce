"use client";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { Spinner } from "@heroui/spinner";
import { ProductCard } from "@/components/productCard";

export default function ProductPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState<string[]>([]);

  const addNewFilterItem = (filter: string) => {
    setFilters((prev) => {
      if (!prev.includes(filter)) {
        return [...prev, filter];
      }
      return prev;
    });
  };

  // veri çekme işlemi
  useEffect(() => {
    const getProducts = async () => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => setLoading(false));
    };

    getProducts();
  }, []);

  useEffect(() => {
    if (products) {
      products.map((product) => addNewFilterItem(product.category));
    }
  }, [products]);

  // yükleniyorsa şunu göster:::
  if (loading) {
    return (
      <div className="flex w-full h-auto items-center justify-center">
        <Spinner size="lg" color="primary" />
      </div>
    );
  }

  // ürünler gelirken hata varsa şunu göster:::
  if (products == null) {
    return <div>There is no product</div>;
  }

  // hiçbir problem ve yükleme yoksa ürünleri listele:::
  return (
    <div className=" flex flex-col w-full space-y-8">
      <div className="flex gap-4 justify-center flex-wrap">
        {filters.map((filter, index) => (
          <div
            key={index}
            className="bg-gray-400 text-white p-4 cursor-pointer rounded-full"
          >
            {filter}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

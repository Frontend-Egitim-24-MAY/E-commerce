import { Product } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface BasketState {
  productList: Product[];
  addProductToBasket: (product: Product, quantity: number) => void;
  deleteProduct: (product: Product) => void;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set) => ({
      productList: [],
      addProductToBasket: (product, quantity) =>
        set((state) => ({
          productList: [...state.productList, ...Array(quantity).fill(product)],
        })),
      deleteProduct: (product) =>
        set((state) => {
          const index = state.productList.findIndex(
            (item) => item.id == product.id
          );
          if (index > -1) {
            // ürün bulunduysa kaldırma işlemini burda yapalım
            const newProductList = [...state.productList];
            newProductList.splice(index, 1);
            return { productList: newProductList };
          }

          return state;
        }),
      deleteCart: () =>
        set(() => ({
          productList: [],
        })),
    }),
    {
      name: "cart-store",
    }
  )
);

import { Product } from "@/types";
import { create } from "zustand";

interface BasketState {
  productList: Product[];
  addProductToBasket: (product: Product) => void;
}

export const useBasketStore = create<BasketState>()((set) => ({
  // sepetimdeki ürünlerin listesi
  productList: [],

  // gönderilen ürünü productList dizisine eklesin
  addProductToBasket: (product) =>
    set((state) => ({ productList: [...state.productList, product] })),
}));

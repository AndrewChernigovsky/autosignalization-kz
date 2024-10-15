// stores/products.ts
import { defineStore } from 'pinia';
import type { ProductType } from '@/types/ProductType';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as ProductType[],
  }),
  actions: {
    setProducts(newProducts: ProductType[]) {
      this.products = newProducts;
    },
    getProducts() {
      return this.products;
    }
  },
});
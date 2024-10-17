import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref<ProductType[]>([])

  function setProducts(newProducts: Product212221Type[]) {
    products.value = newProducts
  }

  function getProducts() {
    return products
  }

  return {
    products,
    setProducts,
    getProducts,
  }
})

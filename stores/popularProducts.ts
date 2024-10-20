// stores/products.ts
import { defineStore } from 'pinia'
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ref } from 'vue'

export const useParkSystemProductsStore = defineStore('parkSystem', () => {
  const products = ref<PopularProductsType[]>([
    {
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 6551,
    },
    {
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 3333,
    },
    {
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 4444,
    },
  ])

  function setNewProducts(newProducts: PopularProductsType) {
    products.value.push(newProducts)
  }

  function getProducts() {
    return products.value
  }

  return {
    products,
    setNewProducts,
    getProducts,
  }
})

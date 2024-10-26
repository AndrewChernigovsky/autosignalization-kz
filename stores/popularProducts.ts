// stores/products.ts
import { defineStore } from 'pinia'
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ref } from 'vue'

import productImage from '@/assets/images/popular-products/product-1.png'
import productImageWebp from '@/assets/images/popular-products/product-1.webp'

export const usePopularProduct = defineStore('popular-products', () => {
  const products = ref<PopularProductsType[]>([
    {
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      images: [{ image: [productImage, productImageWebp] }],
      price: 86000,
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

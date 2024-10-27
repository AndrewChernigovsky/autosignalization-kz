// stores/products.ts
import { defineStore } from 'pinia'
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ref } from 'vue'

import productImage from '@/assets/images/popular-products/product-1.png'
import productImageWebp from '@/assets/images/popular-products/product-1.webp'
import productImageBigWebp from '@/assets/images/popular-products/product-big-1.webp'

export const usePopularProduct = defineStore('popular-products', () => {
  const products = ref<PopularProductsType[]>([
    {
      id: 1,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      images: [
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
      ],
      price: 86000,
      currency: '₸',
    },
    {
      id: 2,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      images: [
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
      ],
      price: 86000,
      currency: '₸',
    },
    {
      id: 3,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      images: [
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
        [productImage, productImageWebp, productImageBigWebp],
      ],
      price: 86000,
      currency: '₸',
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

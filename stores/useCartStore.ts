import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PopularProductsType } from '~/types/PopularProductsType'

export const useCartStore = defineStore('cart', () => {
  const products = ref<PopularProductsType[]>([])

  function addCartProduct(product: PopularProductsType) {
    const index = products.value.findIndex((item) => item.id === product.id)

    if (index === -1) {
      products.value.push({ ...product, quantity: 1 })
    } else {
      products.value[index].quantity += 1
    }
  }

  function removeCartProduct(product: PopularProductsType) {
    const index = products.value.findIndex((item) => item.id === product.id)
    if (index !== -1) {
      if (products.value[index].quantity < 1) {
        products.value.splice(index, 1)
      }
    }
  }

  function getCartProducts() {
    return products.value
  }

  const totalQuantity = computed(() => {
    return products.value.forEach((product) => product.quantity)
  })

  return {
    products,
    getCartProducts,
    removeCartProduct,
    addCartProduct,
    totalQuantity,
  }
})

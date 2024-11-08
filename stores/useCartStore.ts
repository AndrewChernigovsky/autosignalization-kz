import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { PopularProductsType } from '~/types/PopularProductsType'

export const useCartStore = defineStore('cart', () => {
  const products = ref<PopularProductsType[]>([])
  const quantity = ref<number>(0)

  const duplicateID = computed(() => {
    const productIds = new Set()

    return products.value.some((product) => {
      if (productIds.has(product.id)) {
        return true
      }
      productIds.add(product.id)
      return false
    })
  })

  const total = computed(() => {
    return quantity.value
  })

  function addCartProduct(product: PopularProductsType) {
    console.log(product, 'PRODUCT')
    const index = products.value.findIndex((item) => item.id === product.id)

    if (index !== -1) {
      products.value[index].quantity += 1
    } else {
      products.value.push({ ...product, quantity: 1 })
    }

    quantity.value = products.value.reduce(
      (total, item) => total + item.quantity,
      0,
    )
  }

  function removeCartProduct(product: PopularProductsType) {
    const index = products.value.findIndex((item) => item.id === product.id)

    if (index !== -1) {
      if (products.value[index].quantity > 1) {
        products.value[index].quantity -= 1
      } else {
        products.value.splice(index, 1)
      }

      quantity.value = products.value.reduce(
        (total, item) => total + item.quantity,
        0,
      )
    }
  }
  function getCartProducts() {
    return products.value
  }

  return {
    products,
    getCartProducts,
    removeCartProduct,
    addCartProduct,
    total,
    quantity,
    duplicateID,
  }
})

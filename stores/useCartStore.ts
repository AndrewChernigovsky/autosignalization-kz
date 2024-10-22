import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const products = ref<ProductType[]>([])

  function setCartProducts(newProductsCart: ProductType[]) {
    products.value = newProductsCart
  }

  function addCartProduct(productToAdd: ProductType) {
    const existingProduct = products.value.find(
      (product) => product.id === productToAdd.id,
    )
    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      products.value.push({
        ...productToAdd,
        quantity: 1,
      })
    }
  }
  function removeCartProduct(productToRemove: ProductType) {
    if (productToRemove.quantity > 1) {
      productToRemove.quantity -= 1
    } else {
      products.value = products.value.filter(
        (product) => product.id !== productToRemove.id,
      )
    }
  }

  function getCartProducts() {
    return products.value
  }

  return {
    products,
    setCartProducts,
    removeCartProduct,
    getCartProducts,
    addCartProduct,
  }
})

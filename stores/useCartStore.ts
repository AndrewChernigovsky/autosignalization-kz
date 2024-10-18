import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const products = ref<ProductType[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 110,
      image: {
        src: 'https://i.pinimg.com/originals/d2/28/d8/d228d8063f2da4ad6fc8a1fdab0c33b4.jpg',
        alt: '',
      },
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 40,
      image: {
        src: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/e55495a9-e118-4cf5-8d83-22f596d8886d/',
        alt: '',
      },
      quantity: 1,
    },
  ])

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

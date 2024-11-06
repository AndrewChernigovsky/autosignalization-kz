import { defineStore } from 'pinia'
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ref } from 'vue'

export const usePopularProduct = defineStore('popular-products', () => {
  const products = ref<PopularProductsType[]>([
    {
      id: 1,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      images: [
        'images/keychains/starline-e96/product-1.png',
        'images/keychains/starline-e96/product-2.png',
        'images/keychains/starline-e96/product-3.png',
      ],
      price: 86000,
      currency: '₸',
      quantity: 1,
      description:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
    },
    {
      id: 2,
      title: 'StarLine S96 V2 BT 2CAN2LIN GSM',
      images: [
        'images/keychains/starline-s96/product-1.png',
        'images/keychains/starline-s96/product-2.png',
      ],
      price: 98300,
      currency: '₸',
      quantity: 1,
      description:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
    },
    {
      id: 3,
      title: 'Starline E96 V2 BT GSM',
      images: [
        'images/keychains/starline-e96/product-1.png',
        'images/keychains/starline-e96/product-2.png',
        'images/keychains/starline-e96/product-3.png',
      ],
      price: 127300,
      currency: '₸',
      quantity: 1,
      description:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
    },
    {
      id: 4,
      title: 'Starline A93 ECO V2',
      images: [
        'images/keychains/starline-a93/product-1.png',
        'images/keychains/starline-a93/product-2.png',
        'images/keychains/starline-a93/product-3.png',
      ],
      price: 56100,
      currency: '₸',
      quantity: 1,
      description:
        'Надежный автомобильный охранно-телематический комплекс с интеллектуальным автозапуском, несканируемым диалоговым кодом управления, возможностью авторизации по защищенному протоколу через персональную метку или смартфон на iOS и Android с мобильным приложением StarLine, интегрированным 2CAN+4LIN интерфейсом, ударопрочным брелком управления, помехозащищенным трансивером с малошумящим усилителем',
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

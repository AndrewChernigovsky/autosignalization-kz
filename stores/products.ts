// stores/products.ts
import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useProductStore = defineStore('productStore', () => {
  const products = ref<ProductType[]>([
    {
      id: 1,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      category: [
        'АВТОЗАПУСК',
        'УПРАВЛЕНИЕ С ТЕЛЕФОНА',
        'БЕСПЛАТНЫЙ МОНИТОРИНГ',
        'УМНАЯ АВТОРИЗАЦИЯ ПО BLUETOOTH SMART',
        'БЛОКИРОВКА ДВИГАТЕЛЯ ПО CAN',
        'УПРАВЛЕНИЕ ПРЕДПУСКОВЫМ ПОДОГРЕВОМ',
        'УМНАЯ АВТОДИАГНОСТИКА',
        'ДАННЫЕ О ПРОБЕГЕ И УРОВНЕ ТОПЛИВА',
      ],
      price: 8600,
      quantity: 0,
      productType: 'Автосигнализации',
      productDescription:
        'Описание товара - Надежный автомобильный охранно-телематический',
      imagesUrl: [
        {
          url: 'images/popular-products/product-1.png',
          description: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
        },
      ],
      autoType: ['Для внедорожника', 'Для легкового авто'],
      inStock: true,
      descriptions: [
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{ url: '#' }],
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{ url: '#' }],
        },
        {
          title: 'ДИАЛОГОВАЯ ЗАЩИТА',
          description: 'Диалоговый код управления StarLine',
          imageUrl: [{ url: '#' }],
        },
      ],
      features: ['Автозапуск', 'Управление предпусковым подогревом'],
    },
    {
      id: 2,
      title: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 5600,
      quantity: 0,
      productType: 'Парковочные системы',
      productDescription: 'Камера заднего вида с инфракрасной подсветкой',
      inStock: true,
      imagesUrl: [
        {
          url: 'images/popular-products/product-1.png',
          description: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
        },
      ],
      features: [
        'Матрица Color CCD PC3030',
        'Разрешение: 628x586 пикселей',
        'Материал корпуса: пластик',
      ],
    },
  ])

  function setNewProducts(newProducts: ProductType) {
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

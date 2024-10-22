// stores/products.ts
import { defineStore } from 'pinia'
import type { ProductType } from '@/types/ProductType'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {
  const products = ref<ProductType[]>([
    {
      id: 1,
      name: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 8600,
      totalInCart: 0,
      productType: 'Автосигнализации',
      productDescription:
        'Описание товара - Надежный автомобильный охранно-телематический',
      imagesUrl: [
        { url: '#', description: 'STARLINE E96 V2 BT ECO 2CAN+4LIN' },
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
      name: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 5600,
      totalInCart: 0,
      productType: 'Парковочные системы',
      productDescription: 'Камера заднего вида с инфракрасной подсветкой',
      inStock: true,
      imagesUrl: [
        { url: '#', description: 'STARLINE E96 V2 BT ECO 2CAN+4LIN' },
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

  async function getProducts() {
    return products.value
  }

  return {
    products,
    setNewProducts,
    getProducts,
  }
})

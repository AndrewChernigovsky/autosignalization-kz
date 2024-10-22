import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ProductType } from '@/types/ProductType'

export const useSearchStore = defineStore('search', () => {
  const searchString = ref<string>('')

  const products = ref<ProductType[]>([
    {
      id: 1,
      name: 'STARLINE E96 V2 BT ECO 2CAN+4LIN',
      price: 8600,
      quantity: 0,
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
      quantity: 0,
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
    {
      id: 3,
      name: 'dfd',
      price: 5600,
      quantity: 0,
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

  function setSearch(newStr: string) {
    searchString.value = newStr
  }

  function getSearchRes() {
    const trimmedSearch = searchString.value.trim().toLowerCase()

    if (!trimmedSearch) {
      return []
    }

    return products.value.filter((product) =>
      product.name.toLowerCase().includes(trimmedSearch),
    )
  }

  return {
    searchString,
    setSearch,
    getSearchRes,
  }
})

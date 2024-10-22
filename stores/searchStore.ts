import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import type { ProductType } from '@/types/ProductType'

export const useSearchStore = defineStore('search', () => {
  const productStore = useProductStore()
  const searchString = ref<string>('')
  const products = ref<ProductType[]>([]) // Используем ref для хранения продуктов

  // Асинхронная функция для загрузки продуктов
  const fetchedProducts = async () => {
    const fetched = await productStore.getProducts()
    products.value = Array.isArray(fetched) ? fetched : [] // Устанавливаем загруженные продукты }
  }
  // Вызываем функцию загрузки продуктов при инициализации
  onMounted(() => {
    fetchedProducts()
  })

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

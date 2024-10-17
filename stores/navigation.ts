// stores/products.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NavigationLinksType } from '@/types/NavigationLinksType'

export const useNavigationStore = defineStore('product', () => {
  const navigationLinks = ref<NavigationLinksType[]>([
    { name: 'Главная', path: '/' },
    { name: 'Наши услуги', path: '/service' },
    { name: 'О нас', path: '/about' },
    { name: 'Парковочные системы', path: '/parking-system' },
    { name: 'Автосигнализации', path: '/autosygnals' },
  ])

  function setNavigationLink(newLink: NavigationLinksType) {
    navigationLinks.value.push(newLink)
  }

  function getNavigationLinks() {
    return navigationLinks.value
  }

  return {
    navigationLinks,
    setNavigationLink,
    getNavigationLinks,
  }
})

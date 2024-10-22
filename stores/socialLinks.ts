// stores/products.ts
import { defineStore } from 'pinia'
import type { SocialLinkType } from '@/types/SocialLinkType'
import { ref } from 'vue'

export const useSocialLinks = defineStore('socialLinks', () => {
  const socialLinks = ref<SocialLinkType[]>([
    {
      title: 'instagramm',
      imgUrl: '_nuxt/assets/icons/instagramm-icon.svg',
      path: '#',
    },
  ])

  function setNewSocialLinks(newProducts: SocialLinkType) {
    socialLinks.value.push(newProducts)
  }

  function getSocialLinks() {
    return socialLinks.value
  }

  return {
    socialLinks,
    setNewSocialLinks,
    getSocialLinks,
  }
})

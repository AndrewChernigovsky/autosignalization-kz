// stores/sertificates.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ImagesType } from '@/types/ImagesType'

export const useSertificatesStore = defineStore('sertificates', () => {
  const sertificationImages = ref<ImagesType[]>([
    {url: "#", description: "Сертификат 1"},
    {url: "#", description: "Сертификат 2"},
    {url: "#", description: "Сертификат 3"},
  ])

  function setSertificates(newImage: ImagesType) {
    sertificationImages.value.push(newImage)
  }

  function getSertificatesImages() {
    return sertificationImages.value
  }

  return {
    sertificationImages,
    setSertificates,
    getSertificatesImages,
  }
})

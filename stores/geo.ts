// stores/products.ts
import { defineStore } from 'pinia'
import type { GeoType } from '@/types/GeoType'
import { ref } from 'vue'

export const useGeoLocationStore = defineStore('geoLocation', () => {
  const geo = ref<GeoType[]>([
    {
      addreses: 'Казахстан, Алматы, Щепеткова, 122',
      locationUrl: 'https://maps.app.goo.gl/C9qHvYkcYmfRGLAi6',
    },
  ])

  function setNewGeo(newGeo: GeoType) {
    geo.value.push(newGeo)
  }

  function getGeo() {
    return geo.value
  }

  return {
    geo,
    setNewGeo,
    getGeo,
  }
})

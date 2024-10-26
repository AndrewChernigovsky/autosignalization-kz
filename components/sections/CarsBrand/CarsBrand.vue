<template>
  <section class="cars-brand">
    <ul class="list">
      <li class="item" v-for="image in brandsImages">
        <CarsBrandItem
          class="form-image"
          :image="image"
          :width="240"
          :height="240"
        />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import CarsBrandItem from '@/components/CarsBrand/CarsBrandItem.vue'
import audi from '@/assets/images/'

const brandsImages = [
  {
    src: '@/assets/images/cars-brand/audi.png',
    title: 'Audi',
  },
  {
    src: '@/assets/images/cars-brand/genesis.png',
    title: 'Genesis',
  },
  {
    src: '@/assets/images/cars-brand/KIA.png',
    title: 'KIA',
  },
  {
    src: '@/assets/images/cars-brand/lexus.png',
    title: 'lexus',
  },
  {
    src: '@/assets/images/cars-brand/toyota.png',
    title: 'Toyota',
  },
  {
    src: '@/assets/images/cars-brand/wv.png',
    title: 'VW',
  },
]
</script>
<style lang="scss"></style>

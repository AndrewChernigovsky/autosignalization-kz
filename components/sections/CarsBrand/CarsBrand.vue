<template>
  <section class="cars-brand">
    <ul class="list list-style-none">
      <li class="item" v-for="image in brandsImages">
        <CarsBrandItem
          class="image"
          :image="image"
          :width="240"
          :height="240"
        />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { images } from '@/components/sections/CarsBrand/carsBrand'
import CarsBrandItem from '@/components/CarsBrand/CarsBrandItem.vue'

const brandsImages = images
console.log(brandsImages, '321321')
</script>
<style lang="scss">
.cars-brand {
  padding: 30px;
  padding-top: 60px;
  background-image: linear-gradient(90deg, #121010 0%, #0e0c0c 100%);
  overflow: hidden;
}

.list {
  display: flex;
  gap: 30px;
}

.item {
  min-width: 300px;
  min-height: 300px;
  background-color: white;
  padding: 30px;
  border-radius: 30px;
}
</style>

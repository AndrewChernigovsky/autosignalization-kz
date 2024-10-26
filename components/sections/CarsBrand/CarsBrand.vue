<template>
  <section class="cars-brand">
    <ul class="list list-style-none">
      <li class="item" v-for="image in brandsImages">
        <CarsBrandItem
          class="image"
          :image="image"
          :width="140"
          :height="140"
        />
      </li>
    </ul>
  </section>
</template>
<script setup lang="ts">
import { images } from '@/components/sections/CarsBrand/carsBrand'
import CarsBrandItem from '@/components/CarsBrand/CarsBrandItem.vue'

const brandsImages = images
</script>
<style scoped lang="scss">
.cars-brand {
  padding: 30px;
  padding-top: 60px;
  background-image: linear-gradient(90deg, #121010 0%, #0e0c0c 100%);
}

.list {
  display: flex;
  gap: 30px;
}

.item {
  background-color: white;
  padding: 30px;
  border-radius: 30px;
  min-width: 200px;
  min-height: 200px;
  max-width: 300px;
  max-height: 300px;

  @media screen and (min-width: 768px) {
    min-width: 300px;
    min-height: 300px;

    & .image {
      width: 240px;
      height: 240px;
    }
  }
}
</style>

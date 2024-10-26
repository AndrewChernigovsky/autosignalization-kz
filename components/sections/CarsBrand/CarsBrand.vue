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
import { images } from '@/components/sections/CarsBrand/carsBrand'

const brandsImages = images
console.log(brandsImages, '321321')
</script>
<style lang="scss"></style>

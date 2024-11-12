<template>
  <section class="cars-brand">
    <ImageMarquee :images="images" />
  </section>
</template>
<script setup lang="ts">
import { images } from '@/components/sections/CarsBrand/carsBrand'
</script>
<style scoped lang="scss">
.cars-brand {
  min-height: 300px;
  padding: 30px 0;
  background-image: linear-gradient(90deg, #121010 0%, #0e0c0c 100%);
}
</style>

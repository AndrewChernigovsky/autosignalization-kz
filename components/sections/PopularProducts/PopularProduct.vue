<template>
  <div class="popularProduct" v-if="product">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price }}</p>
  </div>
</template>
<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'

const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
})
</script>
<style lang="scss"></style>

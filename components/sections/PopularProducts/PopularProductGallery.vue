<template v-if="product">
  <Slider :product="product" :fancybox="true" />
</template>
<script setup lang="ts">
import Slider from '~/libs/Custom/Slider/Slider.vue'
import type { PopularProductsType } from '~/types/PopularProductsType'

const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
})
</script>
<style lang="scss" scoped></style>

<template v-if="product">
  <Slider :product="product" :fancybox="true" />
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Slider from '~/libs/Custom/Slider/Slider.vue'
import type { PopularProductsType } from '~/types/PopularProductsType'

let currentIndex = ref<number>(0)
const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
})
</script>
<style lang="scss" scoped></style>

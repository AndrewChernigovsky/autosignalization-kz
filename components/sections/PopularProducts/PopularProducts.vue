<template>
  <section class="popularProducts">
    <h2>Популярные товары</h2>
    <div class="container">
      <Swiper
        :modules="[SwiperPagination]"
        :slides-per-view="slidesPerView"
        :space-between="30"
        :pagination="{ clickable: true }"
        class="popular-gallery"
      >
        <SwiperSlide
          class="slide"
          v-for="(product, index) in products"
          :key="index"
        >
          <PopularProduct :product="product" />
        </SwiperSlide>
      </Swiper>
      <YButton
        :link="true"
        :btn="false"
        :path="'/catalog'"
        :customClass="['all-products']"
        >Все товары</YButton
      >
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { usePopularProduct } from '~/stores/popularProducts'
import PopularProduct from '@/components/sections/PopularProducts/PopularProduct.vue'

import type { PopularProductsType } from '@/types/PopularProductsType'

const popularStore = usePopularProduct()
const products = ref<PopularProductsType[]>([])
const viewportWidth = ref(0)
const slidesPerView = computed(() => {
  if (viewportWidth.value < 768) {
    return 1
  }
  if (viewportWidth.value > 768 && viewportWidth.value < 1024) {
    return 2
  }
  if (viewportWidth.value >= 1024) {
    return 3
  }
  // return viewportWidth.value < 768 ? 1 : 3
})
const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  products.value = popularStore.getProducts()
  updateViewportWidth()
  window.addEventListener('resize', updateViewportWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateViewportWidth)
})
</script>
<style lang="scss" scoped>
:deep(.all-products) {
  font-style: italic;
  max-width: 600px;
  margin: 0 auto;
  height: 70px;
  font-size: 24px;
}

.popularProducts {
  position: relative;
  z-index: 2;
  padding: 60px 0;
  background-color: $white;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  font-family: $secondary-font;
  font-style: italic;
  color: $black-424040;
  font-size: 24px;
  margin-top: 0;

  @media screen and (min-width: $desktop-min) {
    font-size: 64px;
  }
}
</style>

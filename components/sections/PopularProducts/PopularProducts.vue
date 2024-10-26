<template>
  <section class="popularProducts">
    <h2>Популярные товары</h2>
    <div class="container">
      <Fancybox
        :options="{
          Carousel: {
            infinite: false,
          },
        }"
      >
        <Swiper
          :modules="[SwiperPagination]"
          :slides-per-view="3"
          :space-between="30"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide
            class="slide"
            v-for="(product, index) in products"
            :key="index"
          >
            <PopularProduct :product="product" />
          </SwiperSlide>
        </Swiper>
      </Fancybox>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { usePopularProduct } from '~/stores/popularProducts'
import PopularProduct from '@/components/sections/PopularProducts/PopularProduct.vue'
import Fancybox from '~/libs/Fancybox.vue'
import type { PopularProductsType } from '@/types/PopularProductsType'

const popularStore = usePopularProduct()
const products = ref<PopularProductsType[]>([])

onMounted(() => (products.value = popularStore.getProducts()))
</script>
<style lang="scss" scoped>
.popularProducts {
  position: relative;
  z-index: 2;
  background-color: $white;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  font-family: $secondary-font;
  font-style: italic;
  color: $black-424040;
  font-size: 24px;
  @media screen and (min-width: $desktop-min) {
    font-size: 64px;
  }
}
</style>

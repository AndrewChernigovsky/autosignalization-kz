<template>
  <section class="popularProduct">
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
            <ProductProduct :product="product" />
          </SwiperSlide>
        </Swiper>
      </Fancybox>
    </div>
  </section>
</template>
<script setup lang="ts">
import { usePopularProduct } from '~/stores/popularProducts'
import Fancybox from '~/libs/Fancybox.vue'

const popularStore = usePopularProduct()
const products = ref<{}[]>([])

onMounted((products.value = popularStore.getProducts()))
</script>
<style lang="scss">
h2 {
  text-transform: uppercase;
  text-align: center;
  font-family: $secondary-font;
  font-style: italic;
  color: $white;
}
</style>

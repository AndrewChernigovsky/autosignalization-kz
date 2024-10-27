<template>
  <Fancybox>
    <Swiper
      :modules="[SwiperNavigation]"
      v-if="product && product.images && product.images.length"
      :slides-per-view="1"
      class="popular-gallery-images"
      slideClass="swiper-carousel-slide"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
    >
      <SwiperSlide v-for="(imageGroup, index) in product.images" :key="index">
        <a :href="imageGroup[2]" data-fancybox="gallery" class="image">
          <picture>
            <source
              v-for="(image, imgIndex) in imageGroup"
              :key="imgIndex"
              :srcset="image"
            />
            <img :src="imageGroup[0]" alt="" />
          </picture>
        </a>
      </SwiperSlide>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </Swiper>
  </Fancybox>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { PopularProductsType } from '~/types/PopularProductsType'
import Fancybox from '~/libs/Fancybox.vue'

const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
})
</script>
<style lang="scss">
.image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.swiper-button-prev {
  left: 15px;
}

.swiper-button-next {
  right: 15px;
}
</style>

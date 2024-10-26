<template>
  <section class="section">
    <div class="container">
      <h2>Сертификаты</h2>
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
            v-for="(image, index) in images"
            :key="index"
          >
            <a :href="image.image.imageBigWebp" data-fancybox="gallery">
              <picture>
                <source
                  v-for="src in [image.image.imageWebp, image.image.image]"
                  :srcset="src"
                  :type="src.endsWith('.webp') ? 'image/webp' : 'image/jpeg'"
                />
                <img :src="image.image.image" alt="сертификаты STARLINE" />
              </picture>
            </a>
          </SwiperSlide>
        </Swiper>
      </Fancybox>
    </div>
  </section>
</template>
<script setup lang="ts">
import { images } from './sertificates'
import Fancybox from '@/components/Fancybox.vue'
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

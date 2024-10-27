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
          :slides-per-view="SlidesPreview"
          :space-between="30"
          :pagination="{ clickable: true }"
        >
          <SwiperSlide
            class="slide"
            v-for="(image, index) in images"
            :key="index"
          >
            <a
              :href="image.image.imageBigWebp"
              data-fancybox="gallery"
              class="link"
            >
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
import Fancybox from '~/libs/Fancybox.vue'
import { ref, computed, onMounted } from 'vue'

const viewportWidth = ref<number>(window.innerWidth)

const SlidesPreview = computed(() => {
  return viewportWidth.value < 768 ? 1 : 3
})

onMounted(() => {
  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth
  })
})
</script>
<style lang="scss" scoped>
h2 {
  text-transform: uppercase;
  text-align: center;
  font-family: $secondary-font;
  font-style: italic;
  color: $white;
}

.link {
  display: flex;
  justify-content: center;
}
</style>

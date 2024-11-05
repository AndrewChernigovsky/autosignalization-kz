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
          :style="{ minHeight: '300px' }"
        >
          <SwiperSlide
            class="slide"
            v-for="(image, index) in images"
            :key="index"
          >
            <a
              :href="image.image"
              data-fancybox="gallery"
              class="link"
              :style="{
                backgroundImage: `url(/placeholder.svg)`,
              }"
            >
              <NuxtPicture
                format="avif, webp"
                :src="image.image"
                loading="lazy"
                placeholder
              />
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
.section {
  padding: 60px 0;
}

h2 {
  text-transform: uppercase;
  text-align: center;
  font-family: $secondary-font;
  font-style: italic;
  color: $white;
}

.link {
  display: grid;
  justify-content: center;
  align-items: stretch;
  min-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>

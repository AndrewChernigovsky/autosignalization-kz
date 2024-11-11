<template>
  <template v-if="fancybox && product">
    <Fancybox>
      <div class="slider">
        <button @click="prevImage" class="nav-btn">
          <span class="visually-hidden">Предыдущий слайд</span>
        </button>
        <div class="slider-images">
          <a
            :href="imageGroup"
            data-fancybox="gallery"
            class="image"
            v-for="(imageGroup, index) in product.images"
            :key="index"
            :class="{ active: currentIndex === index }"
          >
            <!-- <NuxtPicture
              format="avif, webp"
              :src="imageGroup"
              loading="lazy"
              placeholder
            /> -->
            <picture>
              <img :src="imageGroup" alt="" />
            </picture>
          </a>
        </div>
        <button @click="nextImage" class="nav-btn">
          <span class="visually-hidden">Следующий слайд</span>
        </button>
      </div>
    </Fancybox>
  </template>
  <template v-if="!fancybox && product">
    <div class="slider">
      <button @click="prevImage" class="nav-btn">
        <span class="visually-hidden">Предыдущий слайд</span>
      </button>
      <div class="slider-images">
        <div
          class="slider-slide"
          v-for="(imageGroup, index) in product.images"
          :key="index"
          :class="{ active: currentIndex === index }"
        >
          <!-- <NuxtPicture
            format="avif, webp"
            :src="imageGroup"
            loading="lazy"
            placeholder
          /> -->
          <picture>
            <img :src="imageGroup" alt="" />
          </picture>
        </div>
      </div>
      <button @click="nextImage" class="nav-btn">
        <span class="visually-hidden">Следующий слайд</span>
      </button>
    </div>
  </template>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Fancybox from '~/libs/Fancybox.vue'
import type { PopularProductsType } from '~/types/PopularProductsType'

let currentIndex = ref<number>(0)
const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
  fancybox: {
    type: Boolean,
    default: false,
  },
})

function prevImage() {
  if (
    props.product &&
    props.product.images &&
    props.product.images.length > 0
  ) {
    currentIndex.value =
      (currentIndex.value - 1 + props.product.images.length) %
      props.product.images.length
  }
}

function nextImage() {
  if (
    props.product &&
    props.product.images &&
    props.product.images.length > 0
  ) {
    currentIndex.value = (currentIndex.value + 1) % props.product.images.length
  }
}
</script>
<style lang="scss" scoped>
.slider {
  display: flex;
  align-items: center;
  position: relative;
}

.slider-images {
  display: flex;
  overflow: hidden;
  width: 300px;
}

.slider-slide {
  max-width: 100%;
  display: none;
}

.slider-slide.active {
  display: block;
}
.slider-images {
  display: flex;
  overflow: hidden;
  width: 300px;
  position: relative;
  align-items: center;
  justify-content: center;
}

.slider-images a {
  max-width: 100%;
  display: none;
}

.slider-images a.active {
  display: block;
}

.nav-btn {
  cursor: pointer;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: transparent;
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  background-color: #c6c6c6;
  background-repeat: no-repeat;
  background-position: center;

  &:first-of-type {
    left: -10px;
    background-image: url('@/assets/arrow-slider-prev.svg');
  }
  &:last-of-type {
    right: -10px;
    background-image: url('@/assets/arrow-slider-next.svg');
  }
}

.image {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

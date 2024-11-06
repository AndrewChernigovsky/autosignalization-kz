<template>
  <div class="popularProduct" v-if="product">
    <div class="wrapper">
      <div class="images">
        <Fancybox class="images-fancybox">
          <Swiper
            :modules="[SwiperThumbs]"
            v-if="thumbsSwiper != null"
            ref="mySwiperGallery"
            class="my-swiper"
            :slider-class="'swiper-class'"
            slidesPerView="auto"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :thumbs="{
              swiper: thumbsSwiper,
              autoScrollOffset: 3,
            }"
          >
            <SwiperSlide
              class="slide"
              v-for="(image, index) in product.images"
              :key="index"
            >
              <a :href="image" data-fancybox="gallery">
                <NuxtPicture
                  format="avif, webp"
                  :src="image"
                  loading="lazy"
                  placeholder
                  class="image-slide"
                  width="300"
                  style="height: 100%"
                />
              </a>
            </SwiperSlide>
          </Swiper>
          <Swiper
            :modules="[SwiperThumbs]"
            class="gallery-thumbs"
            :slider-class="'gallery-swiper-class'"
            :direction="orientationThumbs"
            :slidesPerView="3"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :grabCursor="true"
            :touch-ratio="1"
            :space-between="10"
            ref="thumbsSwiper"
            @init="onSwiperInit"
          >
            <SwiperSlide
              class="slide"
              v-for="(image, index) in product.images"
              :key="index"
            >
              <NuxtPicture
                format="avif, webp"
                :src="image"
                loading="lazy"
                placeholder
                class="image-slide"
                width="300"
              />
            </SwiperSlide>
          </Swiper>
        </Fancybox>
      </div>
      <h3>{{ product.title }}</h3>
      <!-- <p>ДОСТАВКА: О ДОСТАВКЕ И ОПЛАТЕ</p>
      <p>НАЛИЧИЕ ТОВАРА УТОЧНЯЙТЕ У ПРОДАВЦА.</p>
      <p>{{ product.description }}</p>
      <p>ЦЕНА ЗА МАТЕРИАЛ УКАЗАНА БЕЗ УСТАНОВКИ.</p>
      <p>КОЛИЧЕСТВО</p> -->
      <CountButton />
      <p class="price">
        <!-- <span>ИТОГОВАЯ СТОИМОСТЬ</span> -->
        <span>{{ product.price }}</span>
        <span class="currency"> {{ product.currency }}</span>
      </p>
    </div>
    <div class="buttons">
      <YButton :ytype="ButtonsEnum.primary">В корзину</YButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { onMounted } from 'vue'
import { usePopularProduct } from '~/stores/popularProducts'
import Fancybox from '~/libs/Fancybox.vue'
import { Swiper } from 'swiper/vue'

const popularStore = usePopularProduct()
const product = ref<PopularProductsType>()
const route = useRoute()

const mySwiperGallery = ref(null)
const thumbsSwiper = ref<Swiper | null>(null)

const onSwiperInit = (swiper: Swiper) => {
  thumbsSwiper.value = swiper
}

const viewportWidth = ref<number>(window.innerWidth)

const orientationThumbs = computed(() => {
  return viewportWidth.value < 768 ? 'horizontal' : 'vertical'
})

onMounted(() => {
  window.addEventListener('resize', () => {
    viewportWidth.value = window.innerWidth
  })
})

onMounted(() => {
  const foundProduct = popularStore
    .getProducts()
    .find((p) => p.id === +route.params.id)

  product.value = foundProduct
})
</script>
<style lang="scss" scoped>
.popularProduct {
  padding-bottom: 30px;
  padding-left: 20px;
  display: grid;
  gap: 30px;
  min-width: 300px;
  max-width: 500px;
  justify-self: center;

  .wrapper {
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: $black-424040;
    position: relative;
    padding: 10px;
    border-radius: 20px;
  }

  .images {
    background-color: $white;
    border-radius: 20px;
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: $tablet) {
      background-color: transparent;
      height: 100%;
    }

    @media screen and (min-width: $desktop-min) {
      height: 380px;
    }
  }
}

.my-swiper {
  width: 300px;
  background-color: $white;
  border-radius: 25px;
  height: inherit;

  @media screen and (max-width: $tablet) {
    width: 100%;
  }

  a {
    width: inherit;
    display: flex;
    height: inherit;
    justify-content: center;
  }

  .image-slide {
    height: 100%;
  }
}

.images-fancybox {
  height: inherit;
  display: flex;
  background-color: $black-424040;

  @media screen and (max-width: $tablet) {
    display: grid;
    gap: 10px;
    width: 100%;
  }
}

h3 {
  font-size: 24px;
  text-align: center;
  color: $white;

  @media screen and (min-width: $desktop-min) {
    font-size: 24px;
  }
}

.price {
  font-size: 24px;
  text-align: center;
  color: $white;
  font-weight: 700;
  font-family: $secondary-font;
  font-style: italic;
  display: flex;
  gap: 20px;
  margin: 0;
  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }
}

.currency {
  font-family: $primary-font;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  color: $red-B40036;
}

.buttons {
  display: grid;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  max-width: calc(100% - 100px);
}

.gallery-thumbs {
  height: auto;
  width: 100px;
  margin-left: 10px;
  background-color: $black-424040;
  border: none;

  @media screen and (max-width: $tablet) {
    width: 100%;
    height: 100px;
  }

  .swiper-slide {
    height: 100px;
    display: flex;
    align-items: center;
    background-color: $white;
    border-radius: 10px;
    width: 100px;

    .image-slide {
      height: inherit;
      display: flex;
      justify-content: center;
    }

    a {
      height: inherit;
    }
  }
}
</style>

<template>
  <div class="popularProduct" v-if="product">
    <div class="wrapper">
      <div class="images">
        <Fancybox class="images-fancybox">
          <Swiper
            :modules="[SwiperThumbs]"
            class="my-swiper"
            :slider-class="'swiper-class'"
            ref="mySwiper"
            slidesPerView="auto"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :thumbs="{
              swiper: '.gallery-thumbs',
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
            :direction="'vertical'"
            ref="thumbsSwiper"
            :slidesPerView="3"
            :centeredSlides="true"
            :centeredSlidesBounds="true"
            :grabCursor="true"
            :touch-ratio="1"
            :space-between="10"
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
      <p class="price">
        <span>{{ product.price }}</span>
        <span class="currency"> {{ product.currency }}</span>
      </p>
    </div>
    <div class="buttons">
      <YButton
        :ytype="ButtonsEnum.dark"
        :link="true"
        :btn="false"
        :path="`/popular-products/${product.id}`"
        >Подробнее</YButton
      >
      <YButton :ytype="ButtonsEnum.primary">Купить</YButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { onMounted } from 'vue'
import { usePopularProduct } from '~/stores/popularProducts'
import Fancybox from '~/libs/Fancybox.vue'
import { Navigation, Pagination } from 'swiper/modules'

const popularStore = usePopularProduct()
const product = ref<PopularProductsType>()
const route = useRoute()
// const modules = [Autoplay, EffectFade]

const mySwiper = ref(null)
const thumbsSwiper = ref(null)
onMounted(() => {
  const foundProduct = popularStore
    .getProducts()
    .find((p) => p.id === +route.params.id)

  product.value = foundProduct || null

  console.log(product, 'product')
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

    @media screen and (min-width: $desktop-min) {
      height: 380px;
    }
  }
}

.my-swiper {
  width: 300px;
  background-color: $white;
  border-radius: 25px;

  a {
    width: inherit;
    display: flex;
    height: inherit;

    picture img {
      height: 100%;
    }
  }

  .image-slide {
    height: 100%;
  }
}

.images-fancybox {
  height: inherit;
  display: flex;
  flex-direction: row-reverse;
  background-color: $black-424040;
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
  margin-right: 10px;
  background-color: $black-424040;
  border: none;

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

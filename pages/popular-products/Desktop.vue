<template>
  <section class="popularProduct" v-if="product">
    <div class="container">
      <BreadCrumbs />
      <!-- <BreadCrumbs :id="product.id" /> -->
      <div class="wrapper">
        <div class="block-1">
          <p class="base-text more">
            <span>ДОСТАВКА: О ДОСТАВКЕ И ОПЛАТЕ</span>
          </p>
          <p class="base-text">НАЛИЧИЕ ТОВАРА УТОЧНЯЙТЕ У ПРОДАВЦА.</p>
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
                  <a :href="'../' + image" data-fancybox="gallery">
                    <!-- <NuxtPicture
                      format="avif, webp"
                      :src="image"
                      loading="lazy"
                      placeholder
                      class="image-slide"
                      width="300"
                      style="height: 100%"
                    /> -->
                    <picture>
                      <img :src="'../' + image" alt="" />
                    </picture>
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
                  <!-- <NuxtPicture
                    format="avif, webp"
                    :src="image"
                    loading="lazy"
                    placeholder
                    class="image-slide"
                    width="300"
                  /> -->

                  <picture>
                    <img :src="'../' + image" alt="" />
                  </picture>
                </SwiperSlide>
              </Swiper>
            </Fancybox>
          </div>
        </div>
        <div class="block-2">
          <h3 class="title">{{ product.name }}</h3>
          <p class="base-text description" v-if="product.description">
            {{ product.description }}
          </p>
          <p class="base-text">ЦЕНА ЗА МАТЕРИАЛ УКАЗАНА БЕЗ УСТАНОВКИ.</p>
          <div class="price">
            <span class="result-cost">ИТОГОВАЯ СТОИМОСТЬ</span>
            <p class="price-cost">
              <span class="currency">{{ product.price }}</span>
              <span class="currency"> {{ product.currency }}</span>
            </p>
          </div>
        </div>
        <div class="buttons">
          <div class="count">
            <p class="base-text">КОЛИЧЕСТВО</p>
            <CountButton :product="product" />
          </div>
          <YButton
            :ytype="ButtonsEnum.primary"
            :link="true"
            :btn="false"
            path="/cart"
            >В корзину</YButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { onMounted } from 'vue'
import { usePopularProduct } from '~/stores/popularProducts'
import Fancybox from '~/libs/Fancybox.vue'
import { Swiper } from 'swiper/vue'
import { useHead } from '@unhead/vue'

const title = ref<string>('')

useHead({
  title: title,
})

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
  return viewportWidth.value < 1024 ? 'horizontal' : 'vertical'
})

const handleResize = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  const foundProduct = popularStore
    .getProducts()
    .find((p) => p.id === +route.params.id)
  product.value = foundProduct
  title.value = foundProduct && foundProduct.name
})

onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>
<style lang="scss" scoped>
.title {
  text-transform: uppercase;
  font-style: italic;
  font-size: 34px;
}

.base-text {
  color: $white;
}

.more span {
  position: relative;
  padding-right: 40px;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    background-image: url('@/assets/more.svg');
    background-repeat: no-repeat;
    background-position: center;
    object-fit: cover;
  }
}

.description {
  padding: 5px;
  background-color: #424242;
  border-radius: 10px;
}

.popularProduct {
  padding-bottom: 30px;
  margin-top: 60px;
  padding-left: 20px;
  display: grid;
  gap: 30px;
  min-width: 300px;
  justify-self: center;

  .wrapper {
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #2b2b2b;
    position: relative;
    padding: 10px;
    border-radius: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  .images {
    border-radius: 20px;
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (min-width: $desktop-min) {
      height: 380px;
    }
  }
}

.my-swiper {
  width: 335px;
  background-color: $white;
  border-radius: 25px;
  height: inherit;

  a {
    width: inherit;
    display: flex;
    height: inherit;
    justify-content: center;
    align-items: center;
  }

  .image-slide {
    height: 100%;
  }
}

.images-fancybox {
  height: inherit;
  display: flex;
  // background-color: $black-424040;
}

h3 {
  font-size: 24px;
  text-align: center;
  color: $white;

  @media screen and (min-width: $desktop-min) {
    font-size: 24px;
  }
}

.block-2 {
  .base-text {
    text-align: right;
  }
}

.count {
  .base-text {
    text-align: left;
  }
}

.price {
  font-size: 48px;
  text-align: right;
  color: $white;
  font-weight: 400;
  font-family: $primary-font;
  gap: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: end;

  .result-cost {
    text-align: left;
    font-size: 24px;
  }

  .price-cost {
    text-align: right;
    margin: 0;
    display: flex;
    gap: 5px;
  }
}

.currency {
  font-weight: 700;
  font-size: 28px;

  &:not(:first-of-type) {
    font-family: $primary-font;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 auto;
  gap: 10px;
  width: 100%;
  grid-column: 1/-1;
}

.count {
  text-align: center;
}

.gallery-thumbs {
  height: auto;
  width: 100px;
  margin-left: 10px;
  // background-color: $black-424040;
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

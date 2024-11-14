<template>
  <section class="popularProduct" v-if="product">
    <div class="container">
      <BreadCrumbs />
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
                <a :href="'../'+image" data-fancybox="gallery">
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
                    <img :src="'../'+image" alt="">
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
              <img :src="'../'+image" alt="">
            </picture>

              </SwiperSlide>
            </Swiper>
          </Fancybox>
        </div>
        <h3>{{ product.name }}</h3>
        <p class="base-text more"><span>ДОСТАВКА: О ДОСТАВКЕ И ОПЛАТЕ</span></p>
        <p class="base-text">НАЛИЧИЕ ТОВАРА УТОЧНЯЙТЕ У ПРОДАВЦА.</p>
        <p class="price">
          <span>ИТОГОВАЯ СТОИМОСТЬ</span>
          <p class="price-cost">
            <span class="currency">{{ product.price }}</span>
            <span class="currency"> {{ product.currency }}</span>
          </p>
        </p>
      <div class="buttons">
        <div class="count">
          <p class="base-text">КОЛИЧЕСТВО</p>
          <CountButton :product="product" />
        </div>
        <YButton :ytype="ButtonsEnum.primary" :link="true" :btn="false" path="/cart">В корзину</YButton>
      </div>
        <p class="base-text">ЦЕНА ЗА МАТЕРИАЛ УКАЗАНА БЕЗ УСТАНОВКИ.</p>
        <p class="base-text description" v-if="product.description">{{ product.description }}</p>
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
  viewportWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', handleResize)

  const foundProduct = popularStore
    .getProducts()
    .find((p) => p.id === +route.params.id)

  product.value = foundProduct
  title.value = foundProduct && foundProduct.name
})

onUnmounted(()=> {
window.removeEventListener('resize', handleResize)
}
) 
</script>
<style lang="scss" scoped>
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
  display: grid;
  gap: 30px;
  min-width: 300px;
  max-width: 500px;
  justify-self: center;
  margin-top: 30px;

  .wrapper {
    background-position: 0px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #2B2B2B;
    position: relative;
    padding: 10px;
    border-radius: 20px;
    min-width: inherit;
    max-width: inherit;
  }

  .images {
    border-radius: 20px;
    min-width: inherit;
    max-width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    height: auto;
  }
}

.my-swiper {
  background-color: $white;
  border-radius: 25px;
  min-width: inherit;
  max-width: inherit;
  height: 250px;

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
    display: grid;
    gap: 10px;
    min-width: inherit;
    max-width: inherit;
    overflow: hidden;
    align-content: baseline;
    border-radius: 20px 20px 0px 0px;
}

h3 {
  font-size: 24px;
  text-align: center;
  color: $white;
}

.price {
  font-size: 18px;
  text-align: center;
  color: $white;
  font-weight: 400;
  font-family: $primary-font;
  gap: 10px;
  margin: 0;
  display: grid;
  align-content: center;

  span {
    text-align: left;
  }

  .price-cost {
    text-align: right;
    margin: 0;
  }
}

.currency {

  font-weight: 700;
  font-size: 34px;

  &:not(:first-of-type) {
    font-family: $primary-font;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
  }
}
.buttons {
  display: grid;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  max-width: calc(100% - 100px);
}

.count {
  text-align: center;
}

.gallery-thumbs {
  border: none;
  min-width: inherit;
  max-width: inherit;
  margin-left: 0;
  width: 100%;
  height: 100px;

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

<template>
  <div class="popularProduct" v-if="product">
    <div class="wrapper">
      <div class="images">
        <Fancybox class="images-fancybox">
          <Swiper
            :modules="[Navigation, Pagination]"
            :slides-per-view="1"
            :navigation="true"
            :pagination="{ clickable: true }"
            class="my-swiper"
            :slider-class="'swiper-class'"
            style="width: 300px"
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
                />
              </a>
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
}

.images-fancybox {
  height: inherit;
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
</style>

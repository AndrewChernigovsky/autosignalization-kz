<template>
  <div class="popularProduct" v-if="product">
    <div class="wrapper">
      <div class="images">
        <picture v-if="product.images && product.images.length">
          <template v-for="(imageGroup, index) in product.images" :key="index">
            <source
              v-for="(image, imgIndex) in imageGroup.image"
              :key="imgIndex"
              :src="image"
            />
          </template>

          <img :src="product.images[0].image[0]" alt="" />
        </picture>
      </div>

      <h3>{{ product.title }}</h3>
      <p>{{ product.price }}</p>
      <YButton>Заказать</YButton>
      <YButton>Подробнее</YButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'

const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
  },
})
</script>
<style lang="scss" scoped>
.popularProduct {
  padding-bottom: 30px;
  padding-left: 20px;
  .wrapper {
    background-color: $black-424040;
    position: relative;
    padding: 10px;
    border-radius: 20px;

    &::before {
      content: '';
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 30px;
      position: absolute;
      background-image: url('@/assets/icons/popular-border-bottom.svg');
      background-position: left bottom;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .images {
    background-color: $white;
    border-radius: 20px;
  }
}

h3 {
  font-size: 24px;
  text-align: center;
  color: $white;

  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }
}
</style>

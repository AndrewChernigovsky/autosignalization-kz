<template>
  <div class="popularProduct" v-if="product">
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
  background-color: $black-424040;
  position: relative;

  &::before {
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    clip-path: polygon(
      100% 0%,
      8% 0%,
      0% 91%,
      1% 93%,
      2% 95%,
      3% 97%,
      4% 98%,
      5% 99%,
      7% 100%,
      8% 100%,
      100% 90%
    );
    background-color: $black-424040;
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

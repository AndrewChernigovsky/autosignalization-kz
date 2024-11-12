<template>
  <div class="popularProduct" v-if="product">
    <div class="wrapper">
      <div class="images">
        <PopularProductGallery :product="product" />
      </div>
      <h3>{{ product.name }}</h3>
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
      <YButton
        v-if="statusCartButton"
        :ytype="ButtonsEnum.primary"
        @click="() => product && addProduct(product)"
      >
        Купить
      </YButton>
      <YButton
        v-else
        :ytype="ButtonsEnum.primary"
        path="/cart"
        :link="true"
        :btn="false"
      >
        В корзину
      </YButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PopularProductsType } from '@/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import PopularProductGallery from './PopularProductGallery.vue'
import { useCartStore } from '@/stores/useCartStore'

const cartStore = useCartStore()

const props = defineProps({
  product: {
    type: Object as () => PopularProductsType,
    required: true,
  },
})

const statusCartButton = ref<boolean>(true)

function addProduct(product: PopularProductsType) {
  cartStore.addCartProduct(product)
  statusCartButton.value = false
}
</script>

<style lang="scss" scoped>
.popularProduct {
  padding-bottom: 30px;
  padding-left: 20px;
  display: grid;
  gap: 30px;

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
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: $desktop-min) {
      height: 380px;
    }
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
  display: flex;
  align-items: center;

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
  justify-content: stretch;
  margin: 0 auto;
  gap: 10px;
  max-width: calc(100% - 100px);
  width: 100%;

  @media screen and (max-width: $tablet) {
    :deep(a),
    :deep(button) {
      height: 50px;
      min-width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: $desktop-min) {
    display: grid;
    justify-content: center;
  }
}
</style>

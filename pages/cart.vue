<template>
  <ClientOnly>
    <div class="container">
      <BreadCrumbs />
      <section>
        <h2 class="base-text">{{ cartStore.total }} товар/ов в корзине</h2>
        <template v-if="products && products.length > 0">
          <ul class="list-style-none">
            <li v-for="product in products" :key="product.name">
              <p class="base-text">категория: {{ product.category }}</p>
              <h3 class="base-text">{{ product.name }}</h3>
              <div class="product">
                <div class="image">
                  <!-- <NuxtPicture
                    v-if="product.images?.length"
                    :src="product.images[0]"
                    :alt="product.name"
                    width="300"
                  /> -->
                  <img
                    v-if="product.images?.length"
                    :src="product.images[0]"
                    :alt="product.name"
                    width="300"
                  />
                </div>
                <div class="cost">
                  <p class="base-text">Количество: {{ product.quantity }}</p>
                  <p class="base-text price">
                    Цена: {{ product.price * product.quantity }}
                    <span class="currency"> {{ product.currency }}</span>
                  </p>
                  <CountButton :product="product" :disabled="false" />
                </div>
              </div>
              <YButton
                :ytype="ButtonsEnum.simple"
                :customClass="['button-remove']"
                @click="removeAllProduct(product)"
              >
                <span class="visually-hidden">Удалить из корзины </span>
              </YButton>
            </li>
          </ul>
          <p class="base-text">Итого: {{ cartStore.totalCost }}</p>
          <YButton :link="true" :btn="false" path="/checkout"
            >Оформить заказ</YButton
          >
        </template>

        <template v-else>
          <p class="base-text">Корзина пустая</p>
        </template>
      </section>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import type { PopularProductsType } from '~/types/PopularProductsType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const cartStore = useCartStore()
const products = ref<PopularProductsType[]>([])

function removeAllProduct(product: PopularProductsType) {
  cartStore.removeAllCartProducts(product)
}

onMounted(async () => {
  products.value = cartStore.getCartProducts()
})

watch(
  () => cartStore.products,
  (newProducts) => {
    products.value = newProducts
  },
  { immediate: true },
)
</script>
<style lang="scss" scoped>
.container {
  padding-top: 20px;
}

li {
  position: relative;
}

:deep(.button-remove) {
  position: absolute;
  right: 0;
  top: 0;
  width: 50px;
  height: 50px;
  background-image: url('@/assets/icons/home-icon.svg');
}

.image {
  height: 300px;
  width: 300px;
  border-radius: 25px;
  border: none;
  outline: none;
  background-color: $white;

  &:deep(picture img) {
    height: 100%;
  }
}

.product {
  display: flex;
  gap: 20px;
  align-items: flex-end;

  @media screen and (max-width: $tablet) {
    display: grid;
  }
}

.base-text {
  color: $white;
}

h2 {
  text-transform: uppercase;
}

h3 {
  text-transform: uppercase;
  font-size: 36px;
}

.price {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
}
</style>

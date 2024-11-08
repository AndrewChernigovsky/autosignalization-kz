<template>
  <ClientOnly>
    <div class="container">
      <section>
        <h2>{{ cartStore.total }} товар/ов в корзине</h2>
        <template v-if="products">
          <ul>
            <li v-for="product in products" :key="product.name">
              <p>{{ product.category }}</p>
              <h3>{{ product.name }}</h3>
              <NuxtPicture
                v-if="product.images?.length"
                :src="product.images[0]"
                :alt="product.name"
                width="300"
                height="200"
              />
              <p>Цена: {{ product.price }}</p>
              <CountButton :product="product" :disabled="false" />
              <span>Кол-во: {{ product.quantity }}</span>
              <p>{{ product.price }}</p>
            </li>
          </ul>
        </template>

        <template v-else>
          <p>Корзина пустая</p>
        </template>
      </section>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import type { PopularProductsType } from '~/types/PopularProductsType'

const cartStore = useCartStore()
const products = ref<PopularProductsType[]>([])

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
<style lang="scss" scoped></style>

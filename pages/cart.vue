<template>
  <ClientOnly>
    <div class="container">
      <section>
        <h2>Корзина</h2>
        <ul>
          <li v-for="(item, index) in products" :key="item.name">
            <h3>{{ item.name }}</h3>
            <img
              :src="item.imagesUrl?.[index].url"
              :alt="item.name"
              width="300"
              height="200"
            />
            <p>Цена: {{ item.price }}</p>
            <button type="button" @click="() => cartStore.addCartProduct(item)">
              +
            </button>
            <button
              type="button"
              @click="() => cartStore.removeCartProduct(item)"
            >
              -
            </button>
            <span>Кол-во: {{ item.quantity }}</span>
          </li>
        </ul>
      </section>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import type { ProductType } from '@/types/ProductType'

const cartStore = useCartStore()
const products = ref<ProductType[]>([])

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

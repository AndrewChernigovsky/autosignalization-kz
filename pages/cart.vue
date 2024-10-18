<template>
  <ClientOnly>
    <h2>Корзина</h2>
    <ul>
      <li v-for="item in products" :key="item.name">
        <h3>{{ item.name }}</h3>
        <img
          :src="item.image.src"
          :alt="item.image.alt"
          width="300"
          height="200"
        />
        <p>Цена: {{ item.price }}</p>
        <button type="button" @click="() => cartStore.addCartProduct(item)">
          +
        </button>
        <button type="button" @click="() => cartStore.removeCartProduct(item)">
          -
        </button>
        <span>Кол-во: {{ item.quantity }}</span>
      </li>
    </ul>
  </ClientOnly>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { useCartStore } from '@/stores/useCartStore'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const cartStore = useCartStore()
const products = ref([])

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

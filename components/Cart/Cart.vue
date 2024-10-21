<template>
  <nuxt-link class="link" to="/cart"
    ><Cart />
    <div class="counter" v-if="countItems > 0">
      {{ countItems }}
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useCartStore } from '~/stores/useCartStore'

const cartStore = useCartStore()

const countItems = ref(0)

watch(
  () => cartStore.getCartProducts(),
  (newProducts) => {
    countItems.value = newProducts.length
  },
  { immediate: true },
)
</script>
<style lang="scss" scoped>
.link {
  cursor: pointer;
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;

  @media screen and (min-width: $desktop) {
    width: 50px;
    height: 50px;
  }

  img {
    margin-top: -10px;
  }

  .counter {
    background-color: $red;
    border-radius: 50%;
    min-width: 20px;
    height: 20px;
    position: absolute;
    color: white;
    right: -10px;
    top: -10px;
    text-align: center;
    padding: 5px;
  }
}
</style>

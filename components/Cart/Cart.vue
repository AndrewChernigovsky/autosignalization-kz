<template>
  <div class="cart">
    <nuxt-link class="link" to="/cart"
      ><Cart />
      <div class="counter" v-if="countItems > 0">
        {{ countItems }}
      </div>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '~/stores/useCartStore'

const cartStore = useCartStore()

const countItems = ref(0)

watchEffect(() => {
  // const cartProducts = cartStore.getCartProducts()
  countItems.value = cartStore.totalQuantity
})
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  align-items: center;
}
.link {
  cursor: pointer;
  display: flex;
  width: 30px;
  height: 30px;
  position: relative;

  @media screen and (min-width: $desktop-min) {
    width: 50px;
    height: 50px;
  }

  img {
    margin-top: -10px;

    @media screen and (min-width: $desktop-min) {
      margin-top: auto;
    }
  }
}
.counter {
  background-color: $red;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  position: absolute;
  color: $white;
  right: -10px;
  top: -10px;
  text-align: center;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: $desktop-min) {
    min-width: 30px;
    height: 30px;
    font-size: 20px;
    line-height: 28px;
    font-family: $secondary-font;
  }
}
</style>

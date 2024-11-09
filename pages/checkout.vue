<template>
  <section>
    <div class="container">
      <BreadCrumbs />
      <template v-if="products && products.length > 0">
        <h2 class="base-text">Оформление заказа</h2>
        <h3 class="base-text">Товары в заказе:</h3>
        <table class="cost-result">
          <thead>
            <tr>
              <th class="base-text">Номер</th>
              <th class="base-text">Название товара</th>
              <th class="base-text">Количество</th>
              <th class="base-text">Сумма</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in products" :key="product.id">
              <td class="base-text">
                {{ index + 1 }}
              </td>
              <td class="base-text">
                <YButton :link="true" :btn="false" :ytype="ButtonsEnum.link">
                  {{ product.name }}
                </YButton>
              </td>
              <td class="base-text">Количество: {{ product.quantity }}</td>
              <td class="base-text">
                Сумма: {{ product.price * product.quantity }}
                <span class="currency"> {{ product.currency }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p class="base-text">
          Итог: {{ cartStore.totalCost
          }}<span class="currency"> {{ products[0].currency }}</span>
        </p>

        <YButton
          path="/docs/political"
          :link="true"
          :btn="false"
          :ytype="ButtonsEnum.link"
          >Политика Конфиденциальности</YButton
        >
        <YButton
          path="/docs/agreement"
          :link="true"
          :btn="false"
          :ytype="ButtonsEnum.link"
          >Купли-продажи</YButton
        >
      </template>
      <template v-else>
        <p class="base-text">Нет добавленных товаров</p>
        <p class="base-text">
          <YButton :link="true" :btn="false" path="/cart"> Все товары </YButton>
        </p>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ButtonsEnum } from '@/enums/ButtonsEnum'
import { useCartStore } from '@/stores/useCartStore'
import type { PopularProductsType } from '~/types/PopularProductsType'

const cartStore = useCartStore()
const products = ref<PopularProductsType[]>([])

onMounted(async () => {
  products.value = cartStore.getCartProducts()
})
</script>
<style lang="scss" scoped>
.cost-result {
  padding: 10px;
  background-color: #424242;
  border-radius: 15px;
}

.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.base-text {
  color: $white;
}

h2 {
  text-transform: uppercase;
  color: $white;
}
</style>

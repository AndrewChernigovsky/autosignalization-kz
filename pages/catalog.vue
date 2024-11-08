<template>
  <div class="page-container">
    <div class="container wrapper">
      <section class="catalog">
        <h1 class="title m-0">АВТОСИГНАЛИЗАЦИИ С АВТОЗАПУСКОМ</h1>
        <div class="catalog-wrapper">
          <ul class="list">
            <li class="item"></li>
          </ul>
          <div class="filter-form">
            <form action="#" class="form"></form>
          </div>
          <div class="sort">
            <h2 class="m-0">Сортировка</h2>
            <select name="select" id="catalog-select"></select>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useProductStore } from '@/stores/products'
import { ref, onMounted } from 'vue'
import type { ProductType } from '@/types/ProductType'

const productStore = useProductStore()

const products = ref<ProductType>()

onMounted(() => {
  products.value = productStore.getProducts()
})
</script>
<style lang="scss">
.page-container {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#010308, #000208);
}

.catalog {
  color: #fff;
}
</style>

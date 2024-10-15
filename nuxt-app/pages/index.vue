<template>
  <h2>Index</h2>
</template>
<script lang="ts" setup>
  import type { ProductType } from "@/types/ProductType";
  import { useProductStore } from "@/stores/data/data"; 
  const productStore = useProductStore();

  const products: ProductType[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 110 }
  ];

  productStore.setProducts(products);
  console.log(productStore.getProducts());
</script>
<style lang="scss">

</style>
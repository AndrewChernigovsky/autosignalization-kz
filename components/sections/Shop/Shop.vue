<template>
  <div class="shop">
    <NuxtImg
      :imgAttrs="{ class: 'shop-picture' }"
      :src="src"
      format="avif, webp"
      loading="lazy"
      width="300"
      height="350"
      sizes="(min-width: 320px) 300px 350px, (min-width: 1024px) 700px 554px"
    />
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
    <YButton :link="true" :btn="false" :path="'/catalog'">{{
      btnText
    }}</YButton>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: () => 'МАГАЗИН',
  },
  description: {
    type: String,
    default: () =>
      'Наилучшие предложения автоэлектроники в нашем магазине! Выбирайте, что Вас интересует!',
  },
  btnText: {
    type: String,
    default: () => 'В Магазин',
  },
  src: {
    type: String,
    default: () => 'images/shop/shop.jpeg',
  },
})
</script>
<style scoped lang="scss">
.shop {
  padding: 10px;
}

.shop-picture {
}
</style>

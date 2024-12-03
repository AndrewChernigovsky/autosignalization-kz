<template>
  <div class="shop">
    <div class="shop-picture-container">
      <!-- <NuxtPicture
        :src="src"
        format="avif, webp"
        loading="lazy"
        width="300"
        height="350"
        sizes="(min-width: 320px) 300px 350px, (min-width: 1024px) 700px 554px"
        class="shop-id-picture"
      /> -->
      <picture>
        <img :src="src" alt="" width="300" />
      </picture>
    </div>
    <div class="content">
      <h2 class="title m-0">{{ title }}</h2>
      <p class="description m-0">{{ description }}</p>
      <YButton :link="true" :btn="false" :path="'/catalog'">{{
        btnText
      }}</YButton>
    </div>
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
    default: () => '/images/shop/shop.jpeg',
  },
})
</script>
<style scoped lang="scss">
.shop-picture-container {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
}

.shop-picture-container :deep(img) {
  width: 300px;
  border-radius: 25px;
  max-height: 554px;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    min-width: 720px;
    max-width: 720px;
    min-height: 554px;
  }
}

.shop {
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
  }
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  max-width: 690px;
  color: $white;

  .title {
    font-size: 24px;
    line-height: 30px;
  }

  .description {
    font-size: 24px;
    line-height: 30px;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    .title {
      font-size: 48px;
      line-height: 60px;
    }

    .description {
      font-size: 34px;
      line-height: 42px;
    }
  }
}
</style>

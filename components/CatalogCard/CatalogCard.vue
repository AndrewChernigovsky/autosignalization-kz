<template>
  <div class="card-item">
    <div class="content">
      <div class="picture-container">
        <NuxtPicture v-if="product.imagesUrl" :src="product.imagesUrl[0].url" />
      </div>
      <h1 class="title m-0">{{ product.name }}</h1>
      <p class="price" v-if="product.price">{{ product.price }}</p>
      <div class="buttons-container">
        <YButton
          :ytype="ButtonsEnum.dark"
          :link="true"
          :btn="false"
          :path="`/autosygnales/${product.id}`"
          >Подробнее</YButton
        >
        <YButton :ytype="ButtonsEnum.primary"
          ><span class="primary-btn">КУПИТЬ</span></YButton
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ButtonsEnum } from '@/enums/ButtonsEnum'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>
<style lang="scss"></style>

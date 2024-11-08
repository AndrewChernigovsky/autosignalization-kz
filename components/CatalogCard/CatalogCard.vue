<template>
  <div class="card-item">
    <div class="content">
      <div class="picture-container">
        <NuxtPicture v-if="product.imagesUrl" />
      </div>
      <h1 class="title m-0">{{ product.title }}</h1>
      <p class="price" v-if="product.price">{{ product.price }}</p>
      <div class="buttons-container">
        <YButton :link="true" :btn="false" :path="'/catalog'"
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
    default: () => '',
  },
})
</script>
<style lang="scss"></style>

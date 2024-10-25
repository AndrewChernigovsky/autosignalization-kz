<template>
  <div class="service-item" v-if="service && card === false">
    <h3>{{ service.title }}</h3>
    <div
      class="content"
      :style="{
        backgroundImage: service.imageUrl
          ? `url(${service.imageUrl[0].url})`
          : 'none',
      }"
    >
      <div class="buttons">
        <YButton
          link
          :btn="false"
          :ytype="ButtonsEnum.simple"
          :path="`/services/${service.id}`"
          >Подробнее</YButton
        >
        <YButton :ytype="ButtonsEnum.primary"
          ><span class="primary-btn">Заказать</span></YButton
        >
      </div>
    </div>
  </div>
  <!-- <div class="service-item" v-if="service && card">
    <img
      v-for="image of service.imageUrl"
      :src="image.url"
      :alt="image.description"
    />
    <h1>{{ service.title }}</h1>
    <div class="content">
      <div class="description">
        {{ service.description }}
      </div>
      <div class="about">
        <p class="text">Мы предлагаем:</p>
        <ul class="list-service-disc">
          <li v-for="item of service.serviceDesciption">{{ item }}</li>
        </ul>
      </div>
      <p>Стоимость услуг необходимо уточнять у мастера</p>
      <p>
        Насладитесь комфортом с прекрасно установленным и настроенным нами
        оборудованием!
      </p>
      <Share />
      <p>
        <span>ЦЕНА: </span><span>{{ service.price }}</span>
      </p>

      <YButton :ytype="ButtonsEnum.primary"
        ><span class="primary-btn">Заказать</span></YButton
      >
    </div>
  </div> -->
</template>
<script setup lang="ts">
import type { ServiceType } from '@/types/ServiceType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'

const props = defineProps({
  service: {
    type: Object as () => ServiceType,
  },
  card: {
    type: Boolean,
  },
})
</script>
<style lang="scss"></style>

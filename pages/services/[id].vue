<template>
  <div class="container wrapper">
    <div class="service-item" v-if="service">
      <NuxtPicture
        v-for="image of service.imageUrl"
        format="avif,webp"
        :src="image.url"
        :alt="image.description"
        :imgAttrs="{ class: 'service-img' }"
        sizes="(min-width: 1480px) 1440px 720px"
      />
      <h1 class="m-0 service-title">{{ service.title }}</h1>
      <div class="content">
        <div class="description">
          {{ service.description }}
        </div>
        <div class="about">
          <p class="text service-text m-0">Мы предлагаем:</p>
          <ul class="list-service-disc list-style-none">
            <li
              class="service-disc-item"
              v-for="item of service.serviceDesciption"
            >
              {{ item }}
            </li>
          </ul>
        </div>
        <p class="serices-text">
          Стоимость услуг необходимо уточнять у мастера
        </p>
        <p class="serices-text">
          Насладитесь комфортом с прекрасно установленным и настроенным нами
          оборудованием!
        </p>
        <Share />
        <p class="price-container m-0">
          <span>ЦЕНА:</span><span class="price">{{ service.price }}</span>
        </p>
        <YButton :ytype="ButtonsEnum.primary"
          ><span class="primary-btn">Заказать</span></YButton
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ServiceType } from '@/types/ServiceType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { useServiceStore } from '@/stores/service'

const route = useRoute()

const serviceStore = useServiceStore()
const service = ref<ServiceType>()

onMounted(() => {
  service.value = serviceStore
    .getService()
    .find((post) => post.id === +route.params.id)
})
</script>
<style lang="scss">
.wrapper {
  padding: 0;
  background-image: linear-gradient(180deg, #121010 0, #0e0c0c 100%);
  color: #fff;

  @media screen and (min-width: 768px) {
    padding: 60px 20px;
  }
}

.service-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #2b2b2b;
  border-radius: 20px;

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
}

.service-img {
  border-radius: 15px;
  width: 100%;
  max-width: 1440px;
  max-height: 720px;
  object-fit: cover;
}

.service-title {
  font-size: 24px;
  line-height: 34px;
  font-family: 'Oswald', 'Arial', sans-serif;
  text-align: center;

  @media screen and (min-width: 1024px) {
    font-size: 64px;
    line-height: 86px;
  }
}

.description {
  padding: 10px;
  background-color: #424242;
  border-radius: 20px;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 36px;
    line-height: 46px;
  }
}

.service-text {
  font-size: 36px;
  line-height: 46px;
  font-family: 'Oswald', 'Arial', sans-serif;
  margin-bottom: 10px;
}

.about {
  margin-bottom: 10px;
}

.list-service-disc {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.service-disc-item {
  display: flex;
  column-gap: 10px;
  font-size: 16px;
  line-height: 20px;

  &::before {
    margin-top: 5px;
    display: block;
    content: '';
    min-width: 20px;
    min-height: 20px;
    background-image: url('./../../assets/icons/checkbox-mark-icon.svg');
    background-repeat: no-repeat;
    background-size: 20px;
  }
}

.serices-text {
  display: none;
}

.price-container {
  display: flex;
  gap: 10px;
  font-weight: 700;
  font-size: 34px;
  line-height: 48px;
  font-family: 'Oswald', 'Arial', sans-serif;

  .price {
    display: flex;

    &::after {
      content: '';
      display: block;
      width: 25px;
      height: 30px;
      margin: auto 0;
      margin-left: 4px;
      background-image: url('./../../assets/icons/tenge-icon.svg');
    }
  }
}

.service-btn {
  display: block;
  min-width: 240px;
  margin: 0 auto;
}
</style>

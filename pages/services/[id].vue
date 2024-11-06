<template>
  <div class="container">
    <div class="service-item" v-if="service">
      <NuxtPicture
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
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import type { ServiceType } from '@/types/ServiceType'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import { useServiceStore } from '@/stores/service'

const route = useRoute()

const serviceStore = useServiceStore()
const service = ref<ServiceType | null>(null)

onMounted(() => {
  service.value = serviceStore
    .getService()
    .find((post) => post.id === +route.params.id)
})
</script>
<style lang="scss"></style>

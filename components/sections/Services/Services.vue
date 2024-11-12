<template>
  <template v-if="viewportWidth < 768">
    <section class="services">
      <div class="container">
        <h2 class="title m-0">Наши услуги</h2>
        <ul class="list-style-none">
          <Swiper
            class="service-slider"
            :slides-per-view="1"
            :space-between="50"
            :pagination="{ clickable: true }"
            :modules="[SwiperNavigation, SwiperPagination]"
          >
            <SwiperSlide
              class="slide"
              v-for="service in services"
              :key="service.id"
            >
              <li class="list-item">
                <Service :service="service" :card="false" />
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="services">
      <div class="container">
        <h2>Наши услуги</h2>
        <ul class="list-service list-style-none">
          <li class="list-item" v-for="service in services" :key="service.id">
            <Service :service="service" :card="false" />
          </li>
        </ul>
      </div>
    </section>
  </template>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useServiceStore } from '@/stores/service'
import type { ServiceType } from '@/types/ServiceType'
import Service from './Service.vue'
import '@/assets/styles/_service-swiper.scss'

const services = ref<ServiceType[]>([])
const serviceStore = useServiceStore()

const viewportWidth = ref(0)
const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth
}

onMounted(() => {
  services.value = serviceStore.getService()
  updateViewportWidth()
  window.addEventListener('resize', updateViewportWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateViewportWidth)
})
</script>
<style lang="scss" scoped>
.services {
  position: relative;
  z-index: 1;
  padding: 60px 0;
}

.title {
  margin-bottom: 20px;
}

.slide {
  min-height: 330px;
}
h2,
li {
  font-family: $secondary-font;
  color: $white;
  text-transform: uppercase;
}
h2 {
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: $desktop-min) {
    font-size: 64px;
  }
}
.list-service {
  display: grid;
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
}

.list-item {
  display: grid;
  align-content: space-between;
  min-height: 330px;

  @media screen and (min-width: $desktop-min) {
    min-height: 640px;
  }
}
</style>

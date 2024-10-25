<template>
  <section class="services">
    <div class="container">
      <h2>Наши услуги</h2>
      <ul class="list-service list-style-none">
        <li v-for="service in services">
          <h3>{{ service.title }}</h3>
        </li>
      </ul>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useServiceStore } from '@/stores/service'
import type { ServiceType } from '@/types/ServiceType'
const services = ref<ServiceType[]>([])
const serviceStore = useServiceStore()

onMounted(() => (services.value = serviceStore.getService()))
</script>
<style lang="scss" scoped>
.services {
  position: relative;
  z-index: 1;
}

h2,
li {
  font-family: $secondary-font;
  color: $white;
  text-transform: uppercase;
}

h2 {
  font-size: 24px;

  @media screen and (min-width: $desktop-min) {
    font-size: 64px;
  }
}

h3 {
  font-size: 24px;

  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }
}

.list-service {
  display: grid;
  gap: 20px;

  @media screen and (min-width: $desktop-min) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>

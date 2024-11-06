<template>
  <template v-if="service && card === false">
    <h3>{{ service.title }}</h3>
    <div class="content">
      <NuxtPicture
        format="avif, webp"
        :src="service.imageUrl[0].url"
        loading="lazy"
        placeholder
        width="280"
        height="300"
        sizes="(min-width: 320px) 280px 300px, (min-width: 1024px) 640px 554px"
      />
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
  </template>
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
<style lang="scss" scoped>
.content {
  height: 300px;
  display: grid;
  align-content: flex-end;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: $desktop-min) {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 60px;
    height: auto;
    min-height: 640px;

    picture {
      min-width: 100%;
      max-width: 640px;
    }
  }
}

.buttons {
  display: grid;
  gap: 10px;
  min-height: 105px;

  @media screen and (min-width: $desktop-min) {
    display: flex;
    gap: 20px;
    min-height: auto;
  }
}

.primary-btn {
  font-family: $secondary-font;
  font-style: italic;
}

h3 {
  font-size: 24px;
  text-align: center;

  @media screen and (min-width: $desktop-min) {
    font-size: 48px;
  }
}
</style>

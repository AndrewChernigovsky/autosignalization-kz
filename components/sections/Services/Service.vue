<template>
  <template v-if="service && card === false">
    <div class="item-wrapper">
      <h3 class="m-0">{{ service.title }}</h3>
      <div class="content">
        <!-- <NuxtPicture
          format="avif, webp"
          :src="service.imageUrl[0].url"
          loading="lazy"
          placeholder
          width="280"
          height="300"
          sizes="(min-width: 320px) 280px 300px, (min-width: 1024px) 640px 554px"
        /> -->
        <picture v-if="service.imageUrl?.length">
          <img :src="service.imageUrl[0].url" alt="" />
        </picture>
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
.item-wrapper {
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content {
  display: grid;
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  align-items: stretch;
  overflow: hidden;

  @media screen and (min-width: $desktop-min) {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: flex-end;
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 110%;
    height: 120px;
    background: linear-gradient(to top, rgb(0, 27, 231), rgba(0, 0, 0, 0.1));
    filter: blur(2px);
  }
}

.buttons {
  display: grid;
  gap: 10px;
  min-height: 105px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  @media screen and (min-width: $desktop-min) {
    display: flex;
    gap: 20px;
    min-height: auto;
    width: 60%;
    justify-content: center;
    bottom: 25px;

    :deep(button),
    :deep(a) {
      width: inherit;
      font-size: 24px;
    }
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

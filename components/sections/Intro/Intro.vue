<template>
  <section class="intro">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      @slideChange="onSlideChange"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide class="slide" v-for="(video, index) in videos" :key="index">
        <SwipeSlideCom
          :video="video"
          :content="slideContent"
          :videoIndex="index"
          :activeSlideIndex="slideChangeRef"
        />
      </SwiperSlide>
    </Swiper>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Autoplay } from 'swiper/modules'
import type { Swiper } from 'swiper/types'
import { allvideos } from './videos'
import SwipeSlideCom from './SwipeSlideCom.vue'

import type { VideosType } from '~/types/VideosType'
import type { SlideType } from '~/types/SlideType'

const modules = [Autoplay]
const slideChangeRef = ref(0)

const slideContent = ref<SlideType[]>([
  {
    title: 'АВТОСИГНАЛИЗАЦИИ АВТОЗАПУСК GSM GPS',
    list: ['ПРОДАЖА', 'УСТАНОВКА', 'РЕМОНТ'],
  },
  {
    title: 'РУССИФИКАЦИЯ АВТОМОБИЛЕЙ ЧИПТЮНИНГ',
    list: ['ЛЕЦИНЗИОННЫЕ ПРОШИВКИ', 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА'],
  },
  {
    title: 'УСТАНОВКА ВИДЕОРЕГИСТРАТОРОВ',
    list: ['ПРОДАЖА', 'МОНТАЖ', 'ВОЗМОЖЕН ВЫЕЗД'],
  },
  {
    title: 'УСЛУГИ АВТОЭЛЕКТРИКА',
    list: [
      'РЕМОНТ ЦЕНТРОЗАМКОВ',
      'УСТАНОВКА СИСТЕМ ПАРКИНГА',
      'ОТКЛЮЧЕНИЕ АВТОСИГНАЛИЗАЦИЙ',
    ],
  },
])

function onSlideChange(swiper: Swiper) {
  slideChangeRef.value = swiper.realIndex
}

const videos = ref<VideosType>([
  {
    src: [allvideos.video1Webm, allvideos.video1],
    poster: allvideos.video1Poster,
    type: ['video/webm', 'video/mp4'],
  },
  {
    src: [allvideos.video2Webm, allvideos.video2],
    poster: allvideos.video2Poster,
    type: ['video/webm', 'video/mp4'],
  },
  {
    src: [allvideos.video3Webm, allvideos.video3],
    poster: allvideos.video3Poster,
    type: ['video/webm', 'video/mp4'],
  },
  {
    src: [allvideos.video4Webm, allvideos.video4],
    poster: allvideos.video4Poster,
    type: ['video/webm', 'video/mp4'],
  },
])
</script>
<style lang="scss" scoped>
.intro {
  position: relative;
}

.list-slide {
  display: flex;
  gap: 20px;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;
  position: relative;
  height: 100vh;
  width: 100%;
}
</style>

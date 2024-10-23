<template>
  <section class="intro">
    <video
      preload="none"
      autoplay
      loop
      muted
      ref="videoRef"
      :poster="currentVideo.poster"
    >
      <source
        :src="src"
        :type="currentVideo.type[index]"
        v-for="(src, index) in currentVideo.src"
        :key="index"
      />
      Ваш браузер не поддерживает тег video.
    </video>

    <div class="container">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 6000,
          disableOnInteraction: true,
        }"
        @slideChange="onSlideChange"
      >
        <SwiperSlide class="slide">
          <h1>
            АВТОСИГНАЛИЗАЦИИ <br />
            АВТОЗАПУСК GSM GPS
          </h1>
          <br />
          <ul class="list-slide list-style-none">
            <li>ПРОДАЖА</li>
            <li>УСТАНОВКА</li>
            <li>РЕМОНТ</li>
          </ul>
          <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
        </SwiperSlide>
        <SwiperSlide class="slide">
          <h2>
            РУССИФИКАЦИЯ АВТОМОБИЛЕЙ <br />
            ЧИПТЮНИНГ
          </h2>
          <br />
          <ul class="list-slide list-style-none">
            <li>ЛЕЦИНЗИОННЫЕ ПРОШИВКИ</li>
            <li>КОМПЬЮТЕРНАЯ ДИАГНОСТИКА</li>
          </ul>
          <div class="button">
            <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
          </div>
        </SwiperSlide>
        <SwiperSlide class="slide">
          <h2>
            РУССИФИКАЦИЯ АВТОМОБИЛЕЙ
            <br />
            ЧИПТЮНИНГ
          </h2>
          <br />
          <ul class="list-slide list-style-none">
            <li>ЛЕЦИНЗИОННЫЕ ПРОШИВКИ</li>
            <li>КОМПЬЮТЕРНАЯ ДИАГНОСТИКА</li>
          </ul>
          <div class="button">
            <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
          </div>
        </SwiperSlide>
        <SwiperSlide class="slide">
          <h2>УСТАНОВКА ВИДЕОРЕГИСТРАТОРОВ</h2>
          <br />
          <ul class="list-slide list-style-none">
            <li>ПРОДАЖА</li>
            <li>МОНТАЖ</li>
            <li>ВОЗМОЖЕН ВЫЕЗД</li>
          </ul>
          <div class="button">
            <YButton :ytype="ButtonsEnum.simple">Подробнее</YButton>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Autoplay } from 'swiper/modules'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import type { Swiper } from 'swiper/types'
import { allvideos } from './videos'

import type { VideosType } from '~/types/VideosType'

const modules = [Autoplay]
const videoRef = ref<HTMLVideoElement | null>(null)
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

const currentSlideIndex = ref(0)

const currentVideo = computed(() => videos.value[currentSlideIndex.value])

function onSlideChange(swiper: any) {
  currentSlideIndex.value = swiper.realIndex
  const newSrc = videos.value[currentSlideIndex.value].src[0]
  if (videoRef.value != null && videoRef.value.src !== newSrc) {
    videoRef.value.src = newSrc
    videoRef.value.play()
  }
}
</script>
<style lang="scss" scoped>
.intro {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(black, #170f0f52);
    box-shadow: inset 60px -120px 100px black;
  }

  video {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }
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

h1,
h2,
li {
  color: $white;
}
</style>

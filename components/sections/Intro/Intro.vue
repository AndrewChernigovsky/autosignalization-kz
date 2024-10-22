<template>
  <section class="intro">
    <video :src="videoRef" autoplay loop muted>
      Your browser does not support the video tag.
    </video>
    <div class="container">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="{
          delay: 221000,
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
import { ref } from 'vue'
import { Autoplay } from 'swiper/modules'
import { ButtonsEnum } from '~/enums/ButtonsEnum'
import type { Swiper } from 'swiper/types'

import video1 from '@/assets/videos/video-1.mp4'
import video2 from '@/assets/videos/video-2.mp4'
import video3 from '@/assets/videos/video-3.mp4'

const modules = [Autoplay]
const videos = ref<string[]>([video1, video2, video3])
const videoRef = ref<string>(video1)

function onSlideChange(swiper: any) {
  videoRef.value = videos.value[swiper.realIndex]
  console.log('Slide changed:', swiper.realIndex)
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
    background: linear-gradient(black, $black-170f0f-6);
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
